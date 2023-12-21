import { loadQuizModule } from "$lib/quiz"

export const load = async ({ params }) => {
    const category = await loadQuizModule(`quizzes/${params.quiz}`)
    const topics = category.quizzes.map(quiz => quiz.topic)
    return {
        topics,
        category,
    }
}