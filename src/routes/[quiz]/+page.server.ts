import { loadQuizModule, loadQuizModulesMetadata } from "$lib/quiz"

export const load = async ({ params }) => {
    const module = await loadQuizModule(`quizzes/${params.quiz}`)
    return {
        module,
    }
}

export const entries = async () => {
    const modules = await loadQuizModulesMetadata('./quizzes')
    console.log(modules.map(module => module.path))
    return modules.map(module => ({
        quiz: module.path ?? '',
    }))
}