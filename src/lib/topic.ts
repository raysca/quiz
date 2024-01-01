import fs from 'node:fs';
import matter from 'gray-matter';
import path from 'node:path';
import * as marked from 'marked';

export interface Quiz {
    id: string;
    title: string;
    topic?: string;
    comment: string[];
    options: string[];
    answers: string[];
    body: string[];
}

export interface Topic {
    quizzes: Quiz[];
    title: string
    description?: string;
}

export interface TopicMetaData {
    title: string;
    description?: string;
    totalQuizzes: number;
}

const validateTopic = (topic: Topic, filePath: string) => {
    if (topic.quizzes.length === 0) {
        throw new Error(`No Quiz found in ${filePath}, see the README.md for how to define a quiz document.`);
    }

    if (topic.quizzes.some(quiz => quiz.answers.length === 0)) {
        const quizWithoutAnswer = topic.quizzes.find(quiz => quiz.answers.length === 0);
        throw new Error(`Some quizzes has no answers in ${filePath}, see the README.md for how to define a quiz document. See ${quizWithoutAnswer?.title}`);
    }

    if (topic.quizzes.some(quiz => quiz.options.length === 0)) {
        const quizWithoutOption = topic.quizzes.find(quiz => quiz.options.length === 0);
        throw new Error(`Some quizzes has no options in ${filePath}, see the README.md for how to define a quiz document. ${quizWithoutOption?.title}`);
    }
}

export const extractTopicFromMarkdown = async (markdown: string, filePath: string = ''): Promise<Topic> => {
    const frontMatter = matter(markdown, {});
    const quizzes: Quiz[] = [];
    let quiz: Quiz | undefined = undefined;
    let useExplanation = false;

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
            hr: () => {
                useExplanation = true;
                return '';
            },
            heading: (text: string, level: number) => {
                if (level === 2) {
                    useExplanation = false;
                    quiz = {
                        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
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
                if (useExplanation) {
                    quiz?.comment.push(`<p>${text}</p>`);
                    return text
                }
                quiz?.body.push(`<p>${text}</p>`);
                return `<p>${text}</p>`
            },
            code: (text: string, info: string) => {

                if(useExplanation) {
                    quiz?.comment.push(`<pre><code class="inline-code" language="${info}">${text}</code></pre>`);
                    return `<code class="inline-code" language="${info}">${text}</code>`
                }

                quiz?.body.push(`<pre><code class="inline-code" language="${info}">${text}</code></pre>`);
                return `<code class="inline-code" language="${info}">${text}</code>`
            },
            table: (head: string, body: string) => {
                quiz?.body.push(`<table>${head}${body}</table>`);
                return body;
            },
            html: (html: string) => {
                if (html.indexOf('<comment>') > -1) {
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
    const topic = {
        quizzes,
        ...frontMatter.data,
    } as Topic

    topic.quizzes.forEach(quiz => {
        quiz.topic = frontMatter.data.topic ?? 'General';
    })

    validateTopic(topic, filePath);
    return topic
}

export const loadTopics = async (folder: string): Promise<Topic[]> => {

    const files = fs.readdirSync(folder);
    const quizzes: Topic[] = [];

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
            const subQuizzes = await loadTopics(filePath);
            quizzes.push(...subQuizzes);
            continue;
        }

        const topic = await extractTopicFromMarkdown(fs.readFileSync(filePath, 'utf-8'), filePath);
        quizzes.push(topic);
    }

    return quizzes;
} 

export const loadTopicsMetadata = async (folder: string): Promise<TopicMetaData[]> => {
    const topics = await loadTopics(folder);

    return topics.map<TopicMetaData>(topic => {
        return {
            title: topic.title,
            description: topic.description,
            totalQuizzes: topic.quizzes.length,
        }
    })
}