import { loadQuizModules } from '$lib/module';
import { loadTopics } from '$lib/topic';
import testAnswers from '../../fixtures/answers.json';

export const load = async () => {
	const modules = await loadQuizModules('quizzes');
	const reactTopics = await loadTopics('quizzes/react');
	return {
		modules,
		testQuiz: reactTopics[1].quizzes[0],
		testAnswers,
	};
};
