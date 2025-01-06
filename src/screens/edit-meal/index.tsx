import { Header } from "@components/header"
import { ColumnLabel, Container, CreateMealButton, Form, Label, RowLabels } from "./styles"
import { Input } from "@components/input"
import { Text, View } from "react-native"
import { OptionButton } from "@components/option-button"
import { useState } from "react"

interface EditMealProps {
  name: string
  description: string
  ateAt: string
  isWithinDiet: boolean
}

export function EditMeal({ name, description, ateAt, isWithinDiet }: EditMealProps) {
  const [isWithinDietOptionSelected, setIsWithinDietOptionSelected] = useState(isWithinDiet === true)
  const [isNotWithinDietOptionSelected, setIsNotWithinDietOptionSelected] = useState(isWithinDiet === false)

  const mealDatetime = {
    date: ateAt.split('T')[0],
    time: ateAt.split('T')[1].substring(0, 5)
  }

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

  return (
    <Container>
      <Header title="Editar refeição" />
      
      <Form>
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Nome</Text>
          <Input value={name} />
        </Label>
        
        <Label>
          <Text style={{ fontWeight: 'bold' }}>Descrição</Text>
          <Input style={{ paddingBottom: 92 }} value={description} />
        </Label>
        
        <RowLabels style={{ gap: 20 }}>
          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Data</Text>
            <Input value={mealDatetime.date} />
          </ColumnLabel>

          <ColumnLabel>
            <Text style={{ fontWeight: 'bold' }}>Hora</Text>
            <Input value={mealDatetime.time} />
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

        <CreateMealButton>
          <Text style={{ color: '#FFFFFF', fontWeight: 'semibold', fontSize: 14 }}>Salvar alterações</Text>
        </CreateMealButton>
      </Form>
    </Container>
  )
}
