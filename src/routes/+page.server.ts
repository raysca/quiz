import { loadQuizModules } from "$lib/quiz"

export const load = async () => {
   const categories = await loadQuizModules('./quizzes')
   return {
      categories
   }
}