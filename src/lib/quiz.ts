import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import * as marked from 'marked';

export interface Quiz {
    question: string;
    options: string[];
    answers: string[];
}

export interface QuizDocument {
    quiz: Quiz;
    body: {
        content: string;
        metadata: {
            difficulty: 'easy' | 'medium' | 'hard';
            topic: string;
        }
    }
}

const renderListItem = (listText: string, isAnswer: boolean) => {
    const inputName = isAnswer ? 'answer' : 'wrongAnswer';
    return `
        <li>
            <label class="label cursor-pointer justify-start space-x-4">
                <input name="${inputName}" type="__INPUT_TYPE__" value="${listText}" class="__INPUT_CLASS__" />
                <span class="label-text text-left">${listText}</span>
            </label>
        </li>
    `
}

export const documentToQuiz = async (markdown: string): Promise<QuizDocument> => {
    const frontMatter = matter(markdown, {});
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
                return renderListItem(sanitizedText, checked);
            },
            heading: (text: string, level: number) => {
                if (level === 2) {
                    quiz = {
                        question: text,
                        options: [],
                        answers: [],
                    }
                }
                return `<h${level} class="text-${level}xl font-bold">${text}</h${level}>`
            }
        }
    })

    const content = await marked.parse(frontMatter.content, { gfm: true, breaks: true })
    if (quiz === undefined) {
        throw new Error('No quiz question found, see the README.md for how to define a quiz document.');
    }

    if (quiz.answers.length === 0) {
        throw new Error('Quiz has no answers, see the README.md for how to define a quiz document.');
    }

    let newContent = content;
    if (quiz.answers.length > 1) {
        newContent = newContent.replaceAll('__INPUT_TYPE__', 'checkbox');
        newContent = newContent.replaceAll('__INPUT_CLASS__', 'checkbox checkbox-primary');
    } else {
        newContent = newContent.replaceAll('__INPUT_TYPE__', 'radio');
        newContent = newContent.replaceAll('__INPUT_CLASS__', 'radio radio-primary');
    }

    return {
        quiz,
        body: {
            content: newContent,
            metadata: frontMatter.data as { topic: string, difficulty: 'easy' | 'medium' | 'hard' },
        }
    }
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

        const quiz = await documentToQuiz(fs.readFileSync(filePath, 'utf-8'));
        quizzes.push(quiz);
    }

    return quizzes;
}

export const checkAnswer = (quiz: Quiz, answers: string[]): boolean => {
    const correctAnswers = quiz.answers.sort();
    const givenAnswers = answers.sort();
    return correctAnswers.every((answer, index) => answer === givenAnswers[index]);
}