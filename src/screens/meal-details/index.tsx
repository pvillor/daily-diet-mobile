import { Header } from "@components/header";
import { ActionButton, ActionButtonPencilIcon, ActionButtonTitle, ActionButtonTrashIcon, Container, Details, MealDatetimeTitle, MealDescription, MealName, MealType, MealTypeIcon } from "./styles";
import { Alert, Text, View } from "react-native";

export interface MealDetailsProps {
  isWithinDiet?: boolean
}

export function MealDetails({ isWithinDiet = true }: MealDetailsProps) {
  function handleDeleteMeal() {
    Alert.alert(
      '', 
      'Deseja realmente excluir o registro da refeição?',
      [
        { style: 'cancel', text: 'Cancelar' },
        { text: 'Sim, excluir', onPress: () => {} },
      ]
    )
  }

  return (
    <Container isWithinDiet={isWithinDiet}>
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
            <MealTypeIcon isWithinDiet={isWithinDiet} />
            <Text>dentro da dieta</Text>
          </MealType>
        </View>

        <View style={{ gap: 8 }}>
          <ActionButton>
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