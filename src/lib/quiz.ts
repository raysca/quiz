import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import * as marked from 'marked';

export interface Quiz {
    question: string;
    topic?: string;
    options: string[];
    answers: string[];
    content: string[];
}

export interface QuizDocument {
    quizzes: Quiz[];
    metadata: {
        difficulty: 'easy' | 'medium' | 'hard';
    }
}

const renderListItem = (listText: string) => {
    return `
        <li>
            <label class="label cursor-pointer justify-start space-x-4">
                <input name="answer" type="__INPUT_TYPE__" value="${listText}" class="__INPUT_CLASS__" />
                <span class="label-text text-left">${listText}</span>
            </label>
        </li>
    `
}

const validateQuizDocument = (quizDocument: QuizDocument) => {
    if (quizDocument.quizzes.length === 0) {
        throw new Error('No Quiz found, see the README.md for how to define a quiz document.');
    }

    if (quizDocument.quizzes.some(quiz => quiz.answers.length === 0)) {
        throw new Error('Some quizzes has no answers, see the README.md for how to define a quiz document.');
    }

    if (quizDocument.quizzes.some(quiz => quiz.options.length === 0)) {
        throw new Error('Some quizzes has no options, see the README.md for how to define a quiz document.');
    }
}

const quizInputStyle = (quiz: Quiz) => {
    quiz.content = quiz.content.map(content => {
        if (content.includes('<input')) {
            if (quiz.answers.length > 1) {
                return content.replaceAll('__INPUT_TYPE__', 'checkbox');
            } else {

                return content.replaceAll('__INPUT_TYPE__', 'radio');
            }
        }
        return content;
    })
}

export const documentToQuiz = async (markdown: string): Promise<QuizDocument> => {
    const frontMatter = matter(markdown, {});
    const quizzes: Quiz[] = [];
    let quiz: Quiz | undefined = undefined;

    marked.use({
        renderer: {
            list: (body: string) => {
                quiz?.content.push(`<ul>${body}</ul>`);
                return `<ul>${body}</ul>`
            },
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
                const renderedList = renderListItem(sanitizedText);
                return renderedList;
            },
            heading: (text: string, level: number) => {
                if (level === 2) {
                    quiz = {
                        question: text,
                        options: [],
                        answers: [],
                        content: []
                    }
                    quizzes.push(quiz);
                }
                const headingText = `<h${level} class="text-${level}xl font-bold">${text}</h${level}>`
                quiz?.content.push(headingText);
                return headingText;
            },
            paragraph: (text: string) => {
                quiz?.content.push(`<p>${text}</p>`);
                return `<p>${text}</p>`
            },
            code: (text: string, info: string) => {
                quiz?.content.push(`<pre><code class="inline-code" language="${info}">${text}</code></pre>`);
                return `<code class="inline-code" language="${info}">${text}</code>`
            },
            table: (head: string, body: string) => {
                quiz?.content.push(`<table>${head}${body}</table>`);
                return body;
            },
            html: (html: string) => {
                quiz?.content.push(html);
                return html;
            }
        }
    })

    await marked.parse(frontMatter.content, { gfm: true, breaks: true })
    const baseDocument = {
        quizzes,
        metadata: frontMatter.data as { topic: string, difficulty: 'easy' | 'medium' | 'hard' },
    }

    validateQuizDocument(baseDocument);
    baseDocument.quizzes.forEach(quizInputStyle);
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

export const loadCategories = async (folder: string): Promise<string[]> => {
    const files = fs.readdirSync(folder);
    const categories: string[] = [];

    for (const file of files) {
        const filePath = path.resolve(path.join(folder, file));

        if (fs.statSync(filePath).isDirectory()) {
            const subCategories = await loadCategories(filePath);
            categories.push(...subCategories);
            continue;
        }

        const frontMatter = matter(fs.readFileSync(filePath, 'utf-8'), {});
        const category = frontMatter.data.category as string;
        if (category) {
            categories.push(category);
        }
    }

    return categories;
}

export const checkAnswer = (quiz: Quiz, answers: string[]): boolean => {
    const correctAnswers = quiz.answers.sort();
    const givenAnswers = answers.sort();
    return correctAnswers.every((answer, index) => answer === givenAnswers[index]);
}