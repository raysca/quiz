import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import * as marked from 'marked';

export interface Quiz {
    title: string;
    topic?: string;
    comment: string[];
    options: string[];
    answers: string[];
    body: string[];
}

export interface QuizDocument {
    quizzes: Quiz[];
    metadata: {
        difficulty: 'easy' | 'medium' | 'hard';
    }
}

const validateQuizDocument = (quizDocument: QuizDocument) => {
    if (quizDocument.quizzes.length === 0) {
        throw new Error('No Quiz found, see the README.md for how to define a quiz document.');
    }

    if (quizDocument.quizzes.some(quiz => quiz.answers.length === 0)) {
        const quizWithoutAnswer = quizDocument.quizzes.find(quiz => quiz.answers.length === 0);
        throw new Error(`Some quizzes has no answers, see the README.md for how to define a quiz document. See ${quizWithoutAnswer?.title}`);
    }

    if (quizDocument.quizzes.some(quiz => quiz.options.length === 0)) {
        const quizWithoutOption = quizDocument.quizzes.find(quiz => quiz.options.length === 0);
        throw new Error(`Some quizzes has no options, see the README.md for how to define a quiz document. ${quizWithoutOption?.title}`);
    }
}

export const documentToQuiz = async (markdown: string): Promise<QuizDocument> => {
    const frontMatter = matter(markdown, {});
    const quizzes: Quiz[] = [];
    let quiz: Quiz | undefined = undefined;

    marked.use({
        renderer: {
            listitem(text: string, task: boolean, checked: boolean) {
                const sanitizedText = text
                    .replaceAll('<input checked="" disabled="" type="checkbox"> ', '')
                    .replaceAll('<input disabled="" type="checkbox"> ', '')

                if (task) {
                    quiz?.options.push(sanitizedText);
                    if (checked) {
                        quiz?.answers.push(sanitizedText);
                    }
                }
                return '<li>' + sanitizedText + '</li>';
            },
            heading: (text: string, level: number) => {
                if (level === 2) {
                    quiz = {
                        title: text,
                        options: [],
                        answers: [],
                        comment: [],
                        body: []
                    }
                    quizzes.push(quiz);
                }
                if (level !== 2) {
                    const headingText = `<h${level} class="text-${level}xl font-bold">${text}</h${level}>`
                    quiz?.body.push(headingText);
                }
                return text;
            },
            paragraph: (text: string) => {
                quiz?.body.push(`<p>${text}</p>`);
                return `<p>${text}</p>`
            },
            code: (text: string, info: string) => {
                quiz?.body.push(`<pre><code class="inline-code" language="${info}">${text}</code></pre>`);
                return `<code class="inline-code" language="${info}">${text}</code>`
            },
            table: (head: string, body: string) => {
                quiz?.body.push(`<table>${head}${body}</table>`);
                return body;
            },
            html: (html: string) => {
                if(html.indexOf('role="comment"') > -1) {
                    quiz?.comment.push(html);
                } else {
                    quiz?.body.push(html);
                }
                return html;
            },
            codespan: (code: string) => {
                return `<span class="text-primary">${code}</span>`
            }
        }
    })

    await marked.parse(frontMatter.content, { gfm: true, breaks: true })
    const baseDocument = {
        quizzes,
        metadata: frontMatter.data as { topic: string, difficulty: 'easy' | 'medium' | 'hard' },
    }

    validateQuizDocument(baseDocument);
    return baseDocument
}

export const loadAllQuiz = async (folder: string): Promise<QuizDocument[]> => {

    const files = fs.readdirSync(folder);
    const quizzes: QuizDocument[] = [];

    for (const file of files) {
        const filePath = path.resolve(path.join(folder, file));
        if (!file.endsWith('.md')) {
            continue;
        }

        if (file.startsWith('_')) {
            continue;
        }

        if (fs.statSync(filePath).isDirectory()) {
            const subQuizzes = await loadAllQuiz(filePath);
            quizzes.push(...subQuizzes);
            continue;
        }

        const fileNameAsTopic = file.replace('.md', '');
        const quiz = await documentToQuiz(fs.readFileSync(filePath, 'utf-8'));
        quiz.quizzes.forEach(quiz => {
            if (!quiz.topic) {
                quiz.topic = fileNameAsTopic;
            }
        })
        quizzes.push(quiz);
    }

    return quizzes;
}

type QuizCategory = {
    name: string;
    description?: string;
}

export const loadCategories = async (folder: string): Promise<QuizCategory[]> => {
    const files = fs.readdirSync(folder);
    const categories: QuizCategory[] = [];

    for (const file of files) {
        const filePath = path.resolve(path.join(folder, file));

        if (fs.statSync(filePath).isDirectory()) {
            const metaFile = path.join(filePath, '_meta.json');
            if (fs.existsSync(metaFile)) {
                const meta = JSON.parse(fs.readFileSync(metaFile, 'utf-8'));
                categories.push(Object.assign({name:file}, meta));
            } else {
                categories.push({ name: file });
            }
            continue;
        }
    }

    return categories;
}

export const checkAnswer = (quiz: Quiz, answers: string[]): boolean => {
    const correctAnswers = quiz.answers.sort();
    const givenAnswers = answers.sort();
    return correctAnswers.every((answer, index) => answer === givenAnswers[index]);
}