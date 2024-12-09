import { Container, Count, CountContainer, CountDescription, Details, DietMealsDetails, ExitSummaryIcon, GeneralStatistics, Header, SummaryDescription, SummaryPercentage, Title } from "./styles";

export function Summary() {
  return (
    <Container isFollowingDiet={false}>
      <Header>
        <ExitSummaryIcon isFollowingDiet={false} />

        <SummaryPercentage>90,86%</SummaryPercentage>
        <SummaryDescription>das refeições dentro da dieta</SummaryDescription>
      </Header>

      <Details>
        <Title>Estatísticas gerais</Title>

        <GeneralStatistics>
          <CountContainer>
            <Count>22</Count>
            <CountDescription>melhor sequência de pratos dentro da dieta</CountDescription>
          </CountContainer>

          <CountContainer>
            <Count>109</Count>
            <CountDescription>refeições registradas</CountDescription>
          </CountContainer>

          <DietMealsDetails>
            <CountContainer indicatesDiet isWithinDiet>
              <Count>99</Count>
              <CountDescription>refeições dentro da dieta</CountDescription>
            </CountContainer>

            <CountContainer indicatesDiet isWithinDiet={false}>
              <Count>10</Count>
              <CountDescription>refeições fora da dieta</CountDescription>
            </CountContainer>
          </DietMealsDetails>
        </GeneralStatistics>
      </Details>
    </Container>
  )
}
