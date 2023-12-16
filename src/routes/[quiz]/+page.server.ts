import { loadAllQuiz } from "$lib/quiz"
import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
    const docs = await loadAllQuiz(`quizzes/${params.quiz}`)
    const quizzes = docs.map(doc => doc.quizzes).flat()
    return {
        quizzes
    }
}