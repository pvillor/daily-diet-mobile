import { Header } from "@components/header";
import { ActionButton, ActionButtonPencilIcon, ActionButtonTitle, ActionButtonTrashIcon, Container, Details, MealDatetimeTitle, MealDescription, MealName, MealType, MealTypeIcon } from "./styles";
import { Alert, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { removeMealFromStorage } from "@storage/meal/remove-meal";
import { findMeal } from "@storage/meal/find-meal";
import { useEffect, useState } from "react";
import { Meal } from "@storage/meal/list-meals";

interface MealDetailsParams {
  id: string
}

export function MealDetails() {
  const [meal, setMeal] = useState<Meal>()

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as MealDetailsParams

  function handleEditMeal() {
    navigation.navigate('edit-meal', { id })
  }

  async function getMeal() {
    const foundMeal = await findMeal(id)
    setMeal(foundMeal)
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

  useEffect(() => {
    getMeal()
  }, [])

  if(!meal) {
    return null
  }

  const date = meal.ateAt.split('T')[0].split('-').reverse().join('/')
  const [hour, minutes] = meal.ateAt.split('T')[1].split(':')

  return (
    <Container isWithinDiet={meal.isWithinDiet}>
      <Header title="Refeição" />

      <Details>
        <View style={{ gap: 24, alignItems: 'flex-start' }}>
          <View style={{ gap: 8 }}>
            <MealName>{meal.name}</MealName>
            <MealDescription>{meal.description}</MealDescription>
          </View>

          <View style={{ gap: 8 }}>
            <MealDatetimeTitle>Data e hora</MealDatetimeTitle>
              <MealDescription>{date} às {hour}:{minutes}</MealDescription>
          </View>

          <MealType>
            <MealTypeIcon isWithinDiet={meal.isWithinDiet} />
            <Text>{meal.isWithinDiet ? 'dentro' : 'fora'} da dieta</Text>
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