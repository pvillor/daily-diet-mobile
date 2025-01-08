import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Container, DietSummaryPercentage, DietSummary, Header, DietSummaryDescription, DietSummaryDetailsLinkIcon, NewMealButton, NewMealText } from "./styles";

import logo from "@assets/logo.png";
import ore from "@assets/ore.png";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/meal";
import { useNavigation } from "@react-navigation/native";
import { listMeals, Meal as IMeal } from "@storage/meal/list-meals";
import { useEffect, useState } from "react";

export function Meals() {
  const [meals, setMeals] = useState<IMeal[]>([])

  const navigation = useNavigation()

  function handleShowSummary() {
    navigation.navigate('summary')
  }

  function handleCreateMeal() {
    navigation.navigate('create-meal')
  }

  async function fetchMeals() {
    const data = await listMeals()
    setMeals(data)
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  const { mealsWithinDiet } = meals.reduce((acc, meal) => {
    if (!!meal.isWithinDiet) {
      acc.mealsWithinDiet++
    }

    return acc
  }, {
    mealsWithinDiet: 0,
  })

  const mealsWithinDietPercentage = meals.length > 0 ? parseFloat(String((mealsWithinDiet / meals.length) * 100)).toFixed(2) : parseFloat('0').toFixed(2)
  const isFollowingDiet = Number(mealsWithinDietPercentage) >= 50

  return (
    <Container>
      <Header>
        <Image source={logo} />

        <TouchableOpacity>
          <Avatar source={ore}  />
        </TouchableOpacity>
      </Header>

      <DietSummary isFollowingDiet={isFollowingDiet} onPress={handleShowSummary}>
        <DietSummaryDetailsLinkIcon isFollowingDiet={isFollowingDiet} />

        <DietSummaryPercentage>{mealsWithinDietPercentage || 0}%</DietSummaryPercentage>
        <DietSummaryDescription>das refeições dentro da dieta</DietSummaryDescription>
      </DietSummary>

      <View style={{ gap: 32 }}>
        <View style={{ width: '100%', gap: 8 }}>
          <Text>Refeições</Text>
          <NewMealButton onPress={handleCreateMeal}>
            <Plus size={18} color="#FFF" />
            <NewMealText style={{ color: '#FFF'}}>Nova refeição</NewMealText>
          </NewMealButton>
        </View>

        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Meal meal={item} />
          )}
        />
      </View>
    </Container>
  )
}
