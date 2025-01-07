import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { listMeals } from "./list-meals";

export async function createMeal(name: string, ateAt: Date, isWithinDiet: boolean) {
  try {
    const storedMeals = await listMeals()

    const biggestId = Math.max(...storedMeals.map(meal => Number(meal.id))) || 0

    const storage = JSON.stringify([...storedMeals, {
      id: String(biggestId + 1),
      name,
      ateAt,
      isWithinDiet
    }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}