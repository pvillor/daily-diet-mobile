import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 32px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

interface DietSummaryProps {
  isFollowingDiet: boolean
}

export const DietSummary = styled.TouchableOpacity<DietSummaryProps>`
  width: 100%;
  padding: 20px 16px;
  margin-bottom: 40px;

  position: relative;

  background-color: ${({ theme, isFollowingDiet }) => isFollowingDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;

  gap: 2px;
`

export const DietSummaryPercentage = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE["2XL"]}px;
  font-weight: bold;
  text-align: center;
`

export const DietSummaryDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
`

export const DietSummaryDetailsLinkIcon = styled(ArrowUpRight).attrs<DietSummaryProps>(({ theme, isFollowingDiet }) => ({
  color: isFollowingDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const NewMealButton = styled.TouchableOpacity`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  
  border-radius: 6px;
`

export const NewMealText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-weight: bold;
`
