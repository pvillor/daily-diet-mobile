import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Form = styled.View`
  flex: 1;

  margin-top: -28px;

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

export const CreateMealButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 12px;

    background: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 6px;
`