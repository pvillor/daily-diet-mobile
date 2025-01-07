import AsyncStorage from "@react-native-async-storage/async-storage"
import { listMeals } from "./list-meals"
import { MEAL_COLLECTION } from "@storage/storage-config"

export async function removeMealFromStorage(mealId: string) {
  try {
    const storage = await listMeals()
    const mealsWithDifferentId = storage.filter(meal => meal.id !== mealId)
    const meals = JSON.stringify(mealsWithDifferentId)

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}