import { listMeals } from "./list-meals"

export async function findMeal(mealId: string) {
  try {
    const storage = await listMeals()
    const meal = storage.find(meal => meal.id === mealId)

    return meal
  } catch (error) {
    throw error
  }
}
