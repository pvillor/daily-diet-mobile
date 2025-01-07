import { Image } from "react-native";

import withinDiet from "@assets/within-diet.png";
import outsideDiet from "@assets/outside-diet.png";

import { BackButton, BackButtonTitle, Container, Header, Subtitle, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

interface FeedbackParams {
  isWithinDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()
  const { isWithinDiet } = route.params as FeedbackParams

  function handleNavigateToHome() {
    navigation.navigate('meals')
  }

  return (
    <Container>
      <Header>
        <Title isWithinDiet={isWithinDiet}>{isWithinDiet ? 'Continue assim!' : 'Que pena!'}</Title>
        <Subtitle>{isWithinDiet ? 'Você continua dentro da dieta. Muito bem!' : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}</Subtitle>
      </Header>

      <Image source={isWithinDiet ? withinDiet : outsideDiet} />

      <BackButton onPress={handleNavigateToHome}>
        <BackButtonTitle>Ir para a página inicial</BackButtonTitle>
      </BackButton>
    </Container>
  )
}