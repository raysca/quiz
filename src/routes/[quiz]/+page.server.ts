import { loadAllQuiz } from "$lib/quiz"

export const load = async ({ params }) => {
    const docs = await loadAllQuiz('quizzes/web')
    const quizzes = docs.map(doc => doc.quizzes).flat()
   
    return {
        quizzes
    }
}