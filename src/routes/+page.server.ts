import { loadQuizModulesMetadata } from "$lib/quiz"

export const load = async () => {
   const modules = await loadQuizModulesMetadata('./quizzes')
   return {
      modules
   }
}