import styled from "styled-components/native";
import { FeedbackProps } from ".";

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Title = styled.Text<FeedbackProps>`
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;

  color: ${({ theme, isWithinDiet }) => isWithinDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const BackButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 16px 24px;
  border-radius: 6px;
`

export const BackButtonTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`