import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { fetchMeals } from "./fetch-meals";

export async function createMeal(name: string, ateAt: Date, isWithinDiet: boolean) {
  try {
    const storedMeals = await fetchMeals()

    const biggestId = Math.max(...storedMeals.map(meal => Number(meal.id)))

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