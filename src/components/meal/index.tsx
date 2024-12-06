import { Container, MealDetails, MealDetailsDivisor, MealHour, MealTitle, MealTypeIndicator } from "./style";

interface MealProps {
  meal: string
  isWithinDiet?: boolean
}

export function Meal({ meal, isWithinDiet = true }: MealProps) {
  return (
    <Container>
      <MealDetails>
        <MealHour>20:00</MealHour>
        <MealDetailsDivisor />
        <MealTitle>{meal}</MealTitle>
      </MealDetails>

      <MealTypeIndicator isWithinDiet={isWithinDiet} />
    </Container>
  )
}