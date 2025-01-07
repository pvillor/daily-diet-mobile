import { Input } from "@components/input";
import { ColumnLabel, Container, CreateMealButton, Form, Label, RowLabels } from "./styles";
import { Alert, Text, View } from "react-native";
import { OptionButton } from "@components/option-button";
import { useState } from "react";
import { Header } from "@components/header";
import { useNavigation } from "@react-navigation/native";
import { createMeal } from "@storage/meal/create-meal";

export function CreateMeal() {
  const [isWithinDietOptionSelected, setIsWithinDietOptionSelected] = useState(false)
  const [isNotWithinDietOptionSelected, setIsNotWithinDietOptionSelected] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

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

  async function handleCreate() {
    if(!name || !date || !time || (!isWithinDietOptionSelected && !isNotWithinDietOptionSelected)) {
      return Alert.alert('Preencha todos os campos')
    }

    const convertDate = new Date(date.split('/').reverse().join('-'))
    const [hour, minutes] = time.split(':')
    convertDate.setHours(Number(hour), Number(minutes))
    
    createMeal(name, convertDate, isWithinDietOptionSelected ? true : false)
    navigation.navigate('feedback', { isWithinDiet: isWithinDietOptionSelected ? true : false })
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      
      <Form>
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Nome</Text>
          <Input value={name} onChangeText={setName} />
        </Label>
        
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
          <Input style={{ paddingBottom: 92 }} value={description} onChangeText={setDescription} />
        </Label>
        
        <RowLabels style={{ gap: 20 }}>
          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Data</Text>
            <Input keyboardType="number-pad" value={date} onChangeText={setDate} returnKeyType="done" type="date" maxLength={10} />
          </ColumnLabel>

          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Hora</Text>
            <Input keyboardType="number-pad" value={time} onChangeText={setTime} returnKeyType="done" type="time" maxLength={5} />
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
