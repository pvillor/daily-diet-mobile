import { Image } from "react-native";

import withinDiet from "@assets/within-diet.png";
import outsideDiet from "@assets/outside-diet.png";

import { BackButton, BackButtonTitle, Container, Header, Subtitle, Title } from "./styles";

export interface FeedbackProps {
  isWithinDiet?: boolean
}

export function Feedback({ isWithinDiet = true }: FeedbackProps) {
  return (
    <Container>
      <Header>
        <Title>{isWithinDiet ? 'Continue assim!' : 'Que pena!'}</Title>
        <Subtitle>{isWithinDiet ? 'Você continua dentro da dieta. Muito bem!' : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}</Subtitle>
      </Header>

      <Image source={isWithinDiet ? withinDiet : outsideDiet} />

      <BackButton>
        <BackButtonTitle>Ir para a página inicial</BackButtonTitle>
      </BackButton>
    </Container>
  )
}