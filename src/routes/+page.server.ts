import { loadCategories } from "$lib/quiz"

export const load = async () => {
   const categories = await loadCategories('./quizzes')
   return {
      categories
   }
}