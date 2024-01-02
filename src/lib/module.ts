import fs from 'node:fs';
import path from 'node:path';
import * as marked from 'marked';
import { loadTopicsMetadata, type Topic, type TopicMetaData } from "./topic";

export interface QuizModuleMetaData {
    title: string;
    description?: string[];
    topics: TopicMetaData[];
    path?: string;
}

export type QuizModule = {
    topics: Topic[] | TopicMetaData[];
} & QuizModuleMetaData


export const loadModuleReadme = async (readmeFile: string): Promise<QuizModuleMetaData> => {
    const module: QuizModuleMetaData = { description: [], title: 'Module', topics: [] };
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

export const loadQuizModule = async (folder: string): Promise<QuizModule> => {
    const category: QuizModule = {
        path: folder,
        title: 'Category',
        description: [],
        topics: []
    }
    const metaFile = path.join(folder, 'README.md');
    if (fs.existsSync(metaFile)) {
        const meta = await loadModuleReadme(metaFile);
        category.title = meta.title;
        category.description = meta.description;
    }

    category.topics = await loadTopicsMetadata(folder);
    return category;
}

export const loadQuizModules = async (folder: string): Promise<QuizModule[]> => {
    const files = fs.readdirSync(folder);
    const modules: QuizModule[] = [];

    for (const file of files) {
        const filePath = path.resolve(path.join(folder, file));

        if (fs.statSync(filePath).isDirectory()) {
            const module = await loadQuizModule(filePath);
            modules.push(module);
            continue;
        }
    }
    return modules;
}
