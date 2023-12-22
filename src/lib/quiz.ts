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
    topic?: string
    description?: string;
}

export interface Answered {
    quiz: Quiz;
    answers: string[];
    correct: boolean;
    choices: string[];
}

export interface QuizModuleMetaData {
    title: string;
    description?: string[];
    topics?: string[];
    totalQuizzes?: number;
    path: string;
}

export type QuizModule = {
    quizzes: QuizDocument[];
} & QuizModuleMetaData

const validateQuizDocument = (quizDocument: QuizDocument, filePath: string) => {
    if (quizDocument.quizzes.length === 0) {
        throw new Error(`No Quiz found in ${filePath}, see the README.md for how to define a quiz document.`);
    }

    if (quizDocument.quizzes.some(quiz => quiz.answers.length === 0)) {
        const quizWithoutAnswer = quizDocument.quizzes.find(quiz => quiz.answers.length === 0);
        throw new Error(`Some quizzes has no answers in ${filePath}, see the README.md for how to define a quiz document. See ${quizWithoutAnswer?.title}`);
    }

    if (quizDocument.quizzes.some(quiz => quiz.options.length === 0)) {
        const quizWithoutOption = quizDocument.quizzes.find(quiz => quiz.options.length === 0);
        throw new Error(`Some quizzes has no options in ${filePath}, see the README.md for how to define a quiz document. ${quizWithoutOption?.title}`);
    }
}

export const documentToQuiz = async (markdown: string, filePath: string = ''): Promise<QuizDocument> => {
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
                if (html.indexOf('role="comment"') > -1) {
                    quiz?.comment.push(html);
                } else {
                    quiz?.body.push(html);
                }
                return html;
            },
            codespan: (code: string) => {
                return `<span class="text-accent">${code}</span>`
            }
        }
    })

    await marked.parse(frontMatter.content, { gfm: true, breaks: true })
    const baseDocument = {
        quizzes,
        ...frontMatter.data,
    }

    validateQuizDocument(baseDocument, filePath);
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

        if(file === 'README.md') {
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

        const quiz = await documentToQuiz(fs.readFileSync(filePath, 'utf-8'), filePath);
        quizzes.push(quiz);
    }

    return quizzes;
}

export const loadModuleReadme = async (readmeFile: string): Promise<QuizModuleMetaData> => {
    const module: QuizModuleMetaData = { description: [], title: 'Module' };
    if (fs.existsSync(readmeFile)) {
        marked.use({
            renderer: {
                heading: (text: string, level: number) => {
                    if (level === 1) {
                        module.title = text;
                        return '';
                    }
                    return text;
                },
                paragraph: (text: string) => {
                    module.description?.push(text);
                    return text;
                }
            }
        })
        marked.parse(fs.readFileSync(readmeFile, 'utf-8'));
        return module;
    }

    throw new Error(`${readmeFile} found in the module folder`);
}

export const loadQuizModulesMetadata = async (folder: string): Promise<QuizModuleMetaData[]> => {
    const files = fs.readdirSync(folder);
    const modules: QuizModuleMetaData[] = [];

    for (const file of files) {
        const filePath = path.resolve(path.join(folder, file));

        if (fs.statSync(filePath).isDirectory()) {
            const metaFile = path.join(filePath, 'README.md');
            const meta = await loadModuleReadme(metaFile);
            const topics = await loadAllQuiz(filePath);
            meta.topics = topics.map(q => q.topic ?? 'General').flat();
            meta.totalQuizzes = topics.reduce((acc, curr) => acc + curr.quizzes.length, 0);
            meta.path = file;
            modules.push(meta);
            continue;
        }
    }
    return modules;
}

export const loadQuizModule = async (folder: string): Promise<QuizModule> => {
    const category: QuizModule = {
        title: 'Category',
        description: [],
        quizzes: []
    }
    const metaFile = path.join(folder, 'README.md');
    if (fs.existsSync(metaFile)) {
        const meta = await loadModuleReadme(metaFile);
        category.title = meta.title;
        category.description = meta.description;
    }

    category.quizzes = await loadAllQuiz(folder);
    category.topics = category.quizzes.map(quiz => quiz.topic ?? 'General').flat()
    return category;
}

export const validateQuizAnswer = (quiz: Quiz, answers: string[]): boolean => {
    const correctAnswers = quiz.answers.sort();
    const givenAnswers = answers.sort();
    return correctAnswers.every((answer, index) => answer === givenAnswers[index]);
}