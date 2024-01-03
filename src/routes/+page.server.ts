import { loadQuizModules } from '$lib/module';

export const load = async () => {
	const modules = await loadQuizModules('./quizzes');
	return {
		modules
	};
};
