import { View } from "react-native";
import { Container, ExitIcon, ExitSummaryIcon, SummaryDescription, SummaryPercentage, Title } from "./styles";

interface HeaderProps {
  isSummary?: boolean 
}

export function Header({ isSummary = false }: HeaderProps){
  return (
    <Container>
        {isSummary ? <ExitSummaryIcon /> : <ExitIcon />}

        {isSummary ? (
          <View style={{ gap: 2 }}>
            <SummaryPercentage>90,86%</SummaryPercentage>
            <SummaryDescription>das refeições dentro da dieta</SummaryDescription>
          </View>
        ) : (          
          <Title>Nova refeição</Title>
        )}
    </Container>
  )
}
