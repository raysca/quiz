import fs from 'node:fs'
import { describe, it, expect, beforeAll } from 'vitest';
import { loadModuleReadme, loadQuizModule, type QuizModule, type QuizModuleMetaData } from './quiz';

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
});
