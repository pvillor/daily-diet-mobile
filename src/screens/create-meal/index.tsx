import { Input } from "@components/input";
import { ColumnLabel, Container, CreateMealButton, Form, Label, RowLabels } from "./styles";
import { Text, View } from "react-native";
import { OptionButton } from "@components/option-button";
import { useState } from "react";
import { Header } from "@components/header";
import { useNavigation } from "@react-navigation/native";

export function CreateMeal() {
  const [isWithinDietOptionSelected, setIsWithinDietOptionSelected] = useState(false)
  const [isNotWithinDietOptionSelected, setIsNotWithinDietOptionSelected] = useState(false)

  const navigation = useNavigation()

  function handleSelectIsWithinDiet() {
    setIsWithinDietOptionSelected(!isWithinDietOptionSelected)

    if(isNotWithinDietOptionSelected) {
      setIsNotWithinDietOptionSelected(!isNotWithinDietOptionSelected)
    }
  }

  function handleSelectIsNotWithinDiet() {
    setIsNotWithinDietOptionSelected(!isNotWithinDietOptionSelected)

    if(isWithinDietOptionSelected) {
      setIsWithinDietOptionSelected(!isWithinDietOptionSelected)
    }
  }

  function handleCreate() {
    navigation.navigate('feedback', { isWithinDiet: true })
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      
      <Form>
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Nome</Text>
          <Input />
        </Label>
        
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
          <Input style={{ height: 120 }} />
        </Label>
        
        <RowLabels style={{ gap: 20 }}>
          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Data</Text>
            <Input />
          </ColumnLabel>

          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Hora</Text>
            <Input />
          </ColumnLabel>
        </RowLabels>
        
        <View style={{ gap: 4, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Está dentro da dieta?</Text>

          <RowLabels>
            <ColumnLabel>
              <OptionButton title="Sim" isSelected={isWithinDietOptionSelected} onPress={handleSelectIsWithinDiet}/>
            </ColumnLabel>

            <ColumnLabel>
              <OptionButton title="Não" type="SECONDARY" isSelected={isNotWithinDietOptionSelected} onPress={handleSelectIsNotWithinDiet}/>
            </ColumnLabel>
          </RowLabels>
        </View>

        <CreateMealButton onPress={handleCreate}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 14 }}>Cadastrar refeição</Text>
        </CreateMealButton>
      </Form>
    </Container>
  )
}
