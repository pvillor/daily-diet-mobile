import { useNavigation, useRoute } from "@react-navigation/native";
import { Container, MealDetails, MealDetailsDivisor, MealHour, MealTitle, MealTypeIndicator } from "./style";

interface MealProps {
  meal: {
    id: string
    name: string
    isWithinDiet: boolean
  }
}

export function Meal({ meal }: MealProps) {
  const navigation = useNavigation()

  function handleShowMealDetails() {
    navigation.navigate('meal-details', { id: meal.id })
  }

  return (
    <Container onPress={handleShowMealDetails}>
      <MealDetails>
        <MealHour>20:00</MealHour>
        <MealDetailsDivisor />
        <MealTitle>{meal.name}</MealTitle>
      </MealDetails>

      <MealTypeIndicator isWithinDiet={meal.isWithinDiet} />
    </Container>
  )
}