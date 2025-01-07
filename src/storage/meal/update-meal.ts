import AsyncStorage from "@react-native-async-storage/async-storage"
import { listMeals } from "./list-meals"
import { MEAL_COLLECTION } from "@storage/storage-config"
import { findMeal } from "./find-meal"

export async function updateMeal(mealId: string, name?: string, description?: string, ateAt?: Date, isWithinDiet?: boolean) {
  try {
    const storedMeals = await listMeals()
    const storedMeal = await findMeal(mealId) 

    const mealsWithDifferentId = storedMeals.filter(meal => meal.id !== mealId)

    const storage = JSON.stringify([{
      id: mealId,
      name: name ? name : storedMeal?.name,
      description: description ? description : storedMeal?.description,
      ateAt: ateAt ? ateAt : storedMeal?.ateAt,
      isWithinDiet: isWithinDiet ? isWithinDiet : storedMeal?.isWithinDiet
    }, ...mealsWithDifferentId])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}