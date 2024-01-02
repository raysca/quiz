import fs from 'node:fs'
import { describe, it, expect, beforeAll } from 'vitest';
import { loadQuizModule, type QuizModule } from './module';

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
        expect(moduleData.topics.length).toBeGreaterThan(0);
    });
});
