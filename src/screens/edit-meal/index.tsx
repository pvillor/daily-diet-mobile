import { Header } from "@components/header"
import { ColumnLabel, Container, CreateMealButton, Form, Label, RowLabels } from "./styles"
import { Input } from "@components/input"
import { Text, View } from "react-native"
import { OptionButton } from "@components/option-button"
import { useEffect, useState } from "react"
import { findMeal } from "@storage/meal/find-meal"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Meal } from "@storage/meal/list-meals"
import { updateMeal } from "@storage/meal/update-meal"

interface EditMealParams {
  id: string
}

export function EditMeal() {
  const [meal, setMeal] = useState<Meal>()
  const [isWithinDietOptionSelected, setIsWithinDietOptionSelected] = useState(false)
  const [isNotWithinDietOptionSelected, setIsNotWithinDietOptionSelected] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as EditMealParams

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

  function handleEditMeal() {
    const convertDate = new Date(date.split('/').reverse().join('-'))
    const [hour, minutes] = time.split(':')
    convertDate.setHours(Number(hour) - 4, Number(minutes))

    updateMeal(id, name, description, convertDate, isWithinDietOptionSelected ? true : false)
    navigation.navigate('meal-details', { id })
  } 

  useEffect(() => {
    if(meal) {
      setName(meal.name)
      setDescription(meal.description)
      setDate(meal.ateAt.split('T')[0].split('-').reverse().join('/')),
      setTime(meal.ateAt.split('T')[1].substring(0, 5))
      
      meal.isWithinDiet ? setIsWithinDietOptionSelected(true) : setIsNotWithinDietOptionSelected(true)
    }
  }, [meal])

  async function getMeal() {
    const foundMeal = await findMeal(id)
    setMeal(foundMeal)
  }

  useEffect(() => {
    getMeal()
  }, [])
  
  if(!meal) {
    return null
  }

  return (
    <Container>
      <Header title="Editar refeição" />
      
      <Form>
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Nome</Text>
          <Input value={name} defaultValue={name} onChangeText={setName} />
        </Label>
        
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
          <Input style={{ paddingBottom: 92 }} defaultValue={description} value={description} onChangeText={setDescription} />
        </Label>
        
        <RowLabels style={{ gap: 20 }}>
          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Data</Text>
            <Input keyboardType="number-pad" type="date" returnKeyType="done" maxLength={10} value={date} onChangeText={setDate} />
          </ColumnLabel>

          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Hora</Text>
            <Input keyboardType="number-pad" type="time" returnKeyType="done" maxLength={5} value={time} onChangeText={setTime} />
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

        <CreateMealButton onPress={handleEditMeal}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 14 }}>Salvar alterações</Text>
        </CreateMealButton>
      </Form>
    </Container>
  )
}
