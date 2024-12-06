import { Circle } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-bottom: 8px;
`

export const MealDetails = styled.View`
  flex: 1;

  flex-direction: row;
  align-items: center;

  gap: 12px;
`

export const MealDetailsDivisor = styled.View`
  width: 1px;
  height: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const MealHour = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: bold;
`

export const MealTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

interface MealTypeIndicatorProps {
  isWithinDiet: boolean
}

export const MealTypeIndicator = styled(Circle) .attrs<MealTypeIndicatorProps>(({ theme, isWithinDiet}) => ({
  color: isWithinDiet ? theme.COLORS.GREEN : theme.COLORS.RED,
  weight: 'fill',
  size: 14
}))``
