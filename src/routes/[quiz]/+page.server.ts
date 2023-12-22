import { loadQuizModule } from "$lib/quiz"

export const load = async ({ params }) => {
    const module = await loadQuizModule(`quizzes/${params.quiz}`)
    return {
        module,
    }
}