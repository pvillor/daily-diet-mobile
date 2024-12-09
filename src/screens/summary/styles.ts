import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface SummaryProps {
  isFollowingDiet?: boolean
}

export const Container = styled(SafeAreaView)<SummaryProps>`
  flex: 1;

  background-color: ${({ theme, isFollowingDiet = true }) => isFollowingDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Header = styled.View`
  height: 136px;

  position: relative;

  justify-content: center;
  gap: 2px;
`

export const SummaryPercentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  font-weight: bold;
  text-align: center;
`

export const SummaryDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`

export const ExitSummaryIcon = styled(ArrowLeft).attrs<SummaryProps>(({ theme, isFollowingDiet = true }) => ({
  color: isFollowingDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))`
  position: absolute;
  top: 24px;
  left: 24px;
`

export const Details = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 20px;
  gap: 22px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: bold;

  margin-top: 32px;
`

export const GeneralStatistics = styled.View`
  width: 100%;

  gap: 12px;
`

interface CountContainer {
  indicatesDiet?: boolean
  isWithinDiet?: boolean
}

export const CountContainer = styled.View<CountContainer>`
  flex: 1;

  min-height: 107px;

  padding: 18px;

  background-color: ${({ theme, indicatesDiet = false, isWithinDiet = false }) => indicatesDiet ? isWithinDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};

  border-radius: 8px;

  justify-content: center;
  gap: 8px;
`

export const DietMealsDetails = styled.View`
  flex: 1;

  flex-direction: row;
  gap: 12px;
`

export const Count = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: bold;
  text-align: center;
`

export const CountDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`