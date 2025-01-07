import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storage-config";
import { listMeals } from "./list-meals";

export async function createMeal(name: string, ateAt: Date, isWithinDiet: boolean) {
  try {
    const storedMeals = await listMeals()

    function findLastId() {
      const { biggestId } = storedMeals.reduce((acc, meal) => {
        if(Number(meal.id) > acc.biggestId) {
          acc.biggestId = Number(meal.id)
        }
  
        return acc
      }, {
        biggestId: 1
      })
  
      return biggestId
    }

    const storage = JSON.stringify([...storedMeals, {
      id: String(findLastId() + 1),
      name,
      ateAt,
      isWithinDiet
    }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}