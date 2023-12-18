import { loadCategory } from "$lib/quiz"

export const load = async ({ params }) => {
    const category = await loadCategory(`quizzes/${params.quiz}`)
    const topics = category.quizzes.map(quiz => quiz.topic)
    return {
        topics,
        category,
    }
}