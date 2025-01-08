import { View } from "react-native";
import { Container, ExitIcon, ExitSummaryIcon, SummaryDescription, SummaryPercentage, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  isSummary?: boolean
  title: string
  description?: string
  isFollowingDiet?: boolean
}

export function Header({ isSummary = false, title, description, isFollowingDiet }: HeaderProps){
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('meals')
  }

  return (
    <Container onPress={handleGoBack}>
        {isSummary ? <ExitSummaryIcon isFollowingDiet={isFollowingDiet} /> : <ExitIcon />}

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
