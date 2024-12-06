import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Container, DietSummaryPercentage, DietSummary, Header, DietSummaryDescription, DietSummaryDetailsLinkIcon, NewMealButton, NewMealText } from "./styles";

import logo from "@assets/logo.png";
import ore from "@assets/ore.png";
import { Plus } from "phosphor-react-native";
import { Meal } from "@components/meal";

export function Meals() {
  return (
    <Container>
      <Header>
        <Image source={logo} />

        <TouchableOpacity>
          <Avatar source={ore}  />
        </TouchableOpacity>
      </Header>

      <DietSummary>
        <DietSummaryDetailsLinkIcon />

        <DietSummaryPercentage>90,86%</DietSummaryPercentage>
        <DietSummaryDescription>das refeições dentro da dieta</DietSummaryDescription>
      </DietSummary>

      <View style={{ gap: 32 }}>
        <View style={{ width: '100%', gap: 8 }}>
          <Text>Refeições</Text>
          <NewMealButton>
            <Plus size={18} color="#FFF" />
            <NewMealText style={{ color: '#FFF'}}>Nova refeição</NewMealText>
          </NewMealButton>
        </View>

        <FlatList
          data={['meal', 'meal2', 'meal3']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Meal meal={item} />
          )}
        />
      </View>
    </Container>
  )
}
