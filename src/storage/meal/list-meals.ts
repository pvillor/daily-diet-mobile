import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";

export interface Meal {
  id: string
  name: string
  ateAt: string
  isWithinDiet: boolean
}

export async function listMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: Meal[] = storage ? JSON.parse(storage) : []
    
    return meals
  } catch (error) {
    throw error
  }
}