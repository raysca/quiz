import fs from 'node:fs'
import { describe, it, expect, beforeAll } from 'vitest';
import { loadQuizModule, type QuizModule } from './quiz';

const allModules = fs.readdirSync('./quizzes');

describe.each(allModules)('Module %s', async (module) => {
    let moduleData: QuizModule;
    beforeAll(async () => {
        moduleData = await loadQuizModule(`./quizzes/${module}`);
    });

    it('has a title', () => {
        expect(moduleData.title).toBeDefined();
    });

    it('has a description', () => {
        expect(moduleData.description).toBeDefined();
    });

    it('has a list of topics', () => {
        expect(moduleData.topics?.length).toBeGreaterThan(0);
    });

    it('has a list of quizzes', () => {
        expect(moduleData.quizzes.length).toBeGreaterThan(0);
    });

    it('checks for answer duplicates', () => {
        const answers = new Set();
        moduleData.quizzes.forEach((docs) => {
            docs.quizzes.forEach((quiz) => {
                // check for duplicate answers
                const setAnswers = new Set(quiz.answers);
                expect(setAnswers.size).toBe(quiz.answers.length);
            });
        });
    });
});
