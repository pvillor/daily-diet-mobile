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

  return (
    <Container>
      <Header>
        <Image source={logo} />

        <TouchableOpacity>
          <Avatar source={ore}  />
        </TouchableOpacity>
      </Header>

      <DietSummary onPress={handleShowSummary}>
        <DietSummaryDetailsLinkIcon />

        <DietSummaryPercentage>90,86%</DietSummaryPercentage>
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
