import { Header } from "@components/header";
import { ActionButton, ActionButtonPencilIcon, ActionButtonTitle, ActionButtonTrashIcon, Container, Details, MealDatetimeTitle, MealDescription, MealName, MealType, MealTypeIcon } from "./styles";
import { Alert, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { removeMealFromStorage } from "@storage/meal/remove-meal";

interface MealDetailsParams {
  id: string
}

export function MealDetails() {
  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as MealDetailsParams

  function handleEditMeal() {
    navigation.navigate('edit-meal', { id })
  }

  async function deleteMeal() {
    await removeMealFromStorage(id)
    navigation.navigate('meals')
  }

  function handleDeleteMeal() {
    Alert.alert(
      '', 
      'Deseja realmente excluir o registro da refeição?',
      [
        { style: 'cancel', text: 'Cancelar' },
        { text: 'Sim, excluir', onPress: () => deleteMeal() },
      ]
    )
  }

  return (
    <Container isWithinDiet={true}>
      <Header title="Refeição" />

      <Details>
        <View style={{ gap: 24 }}>
          <View style={{ gap: 8 }}>
            <MealName>Sanduíche</MealName>
            <MealDescription>Sanduíche de pão integral com atum e salada{"\n"}de alface e tomate</MealDescription>
          </View>

          <View style={{ gap: 8 }}>
            <MealDatetimeTitle>Data e hora</MealDatetimeTitle>
            <MealDescription>12/08/2022 às 16:00</MealDescription>
          </View>

          <MealType>
            <MealTypeIcon isWithinDiet={true} />
            <Text>dentro da dieta</Text>
          </MealType>
        </View>

        <View style={{ gap: 8 }}>
          <ActionButton onPress={handleEditMeal}>
            <ActionButtonPencilIcon />
            <ActionButtonTitle>Editar refeição</ActionButtonTitle>
          </ActionButton>

          <ActionButton variant="secondary" onPress={handleDeleteMeal}>
            <ActionButtonTrashIcon variant="secondary" />
            <ActionButtonTitle variant="secondary">Excluir refeição</ActionButtonTitle>
          </ActionButton>
        </View>
      </Details>
    </Container>
  )
}