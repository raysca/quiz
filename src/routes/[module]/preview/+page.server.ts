import { loadQuizModules } from '$lib/module.js';

export const entries = async () => {
	const modules = await loadQuizModules('./quizzes');
	return modules.map((module) => ({
		module: module.path ?? ''
	}));
};
