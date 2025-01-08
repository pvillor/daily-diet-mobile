import { Header } from "@components/header";
import { Container, Count, CountContainer, CountDescription, Details, DietMealsDetails, GeneralStatistics, Title } from "./styles";
import { useEffect, useState } from "react";
import { listMeals, Meal } from "@storage/meal/list-meals";

export function Summary() {
  const [meals, setMeals] = useState<Meal[]>([])

  async function fetchMeals() {
    const data = await listMeals()
    setMeals(data)
  }
  
  useEffect(() => {
    fetchMeals()
  }, [])

  if(!meals) {
    return null
  }

  const { mealsWithinDiet, mealsOutsideDiet, biggestStreak } = meals.reduce((acc, meal) => {
    if (!!meal.isWithinDiet) {
      acc.mealsWithinDiet++
      acc.currentStreak++

      if(acc.currentStreak > acc.biggestStreak) {
        acc.biggestStreak = acc.currentStreak
      }
    } else {
      acc.mealsOutsideDiet++
      acc.currentStreak = 0
    }

    return acc
  }, {
    mealsWithinDiet: 0,
    mealsOutsideDiet: 0,
    currentStreak: 0,
    biggestStreak: 0
  })

  const mealsWithinDietPercentage = meals.length > 0 ? parseFloat(String((mealsWithinDiet / meals.length) * 100)).toFixed(2) : parseFloat('0').toFixed(2)
  const isFollowingDiet = Number(mealsWithinDietPercentage) >= 50

  return (
    <Container isFollowingDiet={isFollowingDiet}>
      <Header isSummary title={`${mealsWithinDietPercentage}%`} description="das refeições dentro da dieta" />      

      <Details>
        <Title>Estatísticas gerais</Title>

        <GeneralStatistics>
          <CountContainer>
            <Count>{biggestStreak}</Count>
            <CountDescription>melhor sequência de pratos dentro da dieta</CountDescription>
          </CountContainer>

          <CountContainer>
            <Count>{meals.length}</Count>
            <CountDescription>refeições registradas</CountDescription>
          </CountContainer>

          <DietMealsDetails>
            <CountContainer indicatesDiet isWithinDiet>
              <Count>{mealsWithinDiet}</Count>
              <CountDescription>refeições dentro da dieta</CountDescription>
            </CountContainer>

            <CountContainer indicatesDiet isWithinDiet={false}>
              <Count>{mealsOutsideDiet}</Count>
              <CountDescription>refeições fora da dieta</CountDescription>
            </CountContainer>
          </DietMealsDetails>
        </GeneralStatistics>
      </Details>
    </Container>
  )
}
