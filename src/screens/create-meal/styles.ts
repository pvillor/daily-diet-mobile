import { ArrowLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Header = styled.View`
  height: 132px;

  position: relative;

  justify-content: center;
  gap: 2px;
`

export const ExitCreateMealIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 24
}))`
  position: absolute;
  top: 50%;
  left: 24px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-weight: bold;

  margin-top: 32px;
`

export const Form = styled.View`
  flex: 1;

  margin-top: -12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px;

  padding: 40px 24px;

  gap: 24px;
`

export const Label = styled.View`
  gap: 4px;
`

export const RowLabels = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const ColumnLabel = styled(Label)`
  flex: 1;
`