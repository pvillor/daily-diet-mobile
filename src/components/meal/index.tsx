import { useNavigation } from "@react-navigation/native";
import { Container, MealDetails, MealDetailsDivisor, MealHour, MealTitle, MealTypeIndicator } from "./style";

interface MealProps {
  meal: {
    id: string
    name: string
    ateAt: string
    isWithinDiet: boolean
  }
}

export function Meal({ meal }: MealProps) {
  const navigation = useNavigation()

  function handleShowMealDetails() {
    navigation.navigate('meal-details', { id: meal.id })
  }
  
  const [hour, minutes] = meal.ateAt.split('T')[1].split(':')
  
  const time = `${hour}:${minutes}`
  
  return (
    <Container onPress={handleShowMealDetails}>
      <MealDetails>
        <MealHour>{time}</MealHour>
        <MealDetailsDivisor />
        <MealTitle>{meal.name}</MealTitle>
      </MealDetails>

      <MealTypeIndicator isWithinDiet={meal.isWithinDiet} />
    </Container>
  )
}