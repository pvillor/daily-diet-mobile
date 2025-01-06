import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Container, DietSummaryPercentage, DietSummary, Header, DietSummaryDescription, DietSummaryDetailsLinkIcon, NewMealButton, NewMealText } from "./styles";

import logo from "@assets/logo.png";
import ore from "@assets/ore.png";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/meal";
import { useNavigation } from "@react-navigation/native";

export function Meals() {
  const navigation = useNavigation()

  function handleShowSummary() {
    navigation.navigate('summary')
  }

  function handleCreateMeal() {
    navigation.navigate('create-meal')
  }

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
          data={[
            {
              id: '1',
              name: 'meal1',
              isWithinDiet: true
            },
            {
              id: '2',
              name: 'meal2',
              isWithinDiet: true
            },
            {
              id: '3',
              name: 'meal3',
              isWithinDiet: false
            },
        ]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Meal meal={item} />
          )}
        />
      </View>
    </Container>
  )
}
