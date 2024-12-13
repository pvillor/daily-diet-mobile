import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 132px;

  align-items: center;
  justify-content: center;
`

export const ExitIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 24
}))`
  position: absolute;
  left: 24px;
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

interface ExitSummaryIconProps {
  isFollowingDiet?: boolean
}

export const ExitSummaryIcon = styled(ExitIcon).attrs<ExitSummaryIconProps>(({ theme, isFollowingDiet = true }) => ({
  color: isFollowingDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  top: 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
`