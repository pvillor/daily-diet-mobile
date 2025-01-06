import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateMeal } from "@screens/create-meal";
import { EditMeal } from "@screens/edit-meal";
import { Feedback } from "@screens/feedback";
import { MealDetails } from "@screens/meal-details";
import { Meals } from "@screens/meals";
import { Summary } from "@screens/summary";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="meals"
        component={Meals}
      />

      
      <Screen 
        name="summary"
        component={Summary}
      />

      <Screen 
        name="create-meal"
        component={CreateMeal}
      />

      <Screen 
        name="feedback"
        component={Feedback}
      />

      <Screen 
        name="meal-details"
        component={MealDetails}
      />

      <Screen 
        name="edit-meal"
        component={EditMeal}
      />
    </Navigator>
  )
}