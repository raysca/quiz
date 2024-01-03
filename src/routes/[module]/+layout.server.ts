import { loadQuizModule } from '$lib/module.js';
import { loadTopics } from '$lib/topic.js';

export const load = async ({ params }) => {
	const topics = await loadTopics(`quizzes/${params.module}`);
	const module = await loadQuizModule(`quizzes/${params.module}`);
	const quizzes = topics.map((topic) => topic.quizzes).flat();
	return {
		module,
		topics,
		quizzes
	};
};
