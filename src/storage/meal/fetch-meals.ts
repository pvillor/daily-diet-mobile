import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";

export async function fetchMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: {
      id: string
      name: string
      ateAt: string
      isWithinDiet: boolean
    }[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}