import { View } from "react-native";
import { Container, ExitIcon, ExitSummaryIcon, SummaryDescription, SummaryPercentage, Title } from "./styles";

interface HeaderProps {
  isSummary?: boolean
  title: string
  description?: string
}

export function Header({ isSummary = false, title, description }: HeaderProps){
  return (
    <Container>
        {isSummary ? <ExitSummaryIcon /> : <ExitIcon />}

        {isSummary ? (
          <View style={{ gap: 2 }}>
            <SummaryPercentage>{title}</SummaryPercentage>
            <SummaryDescription>{description}</SummaryDescription>
          </View>
        ) : (          
          <Title>{title}</Title>
        )}
    </Container>
  )
}
