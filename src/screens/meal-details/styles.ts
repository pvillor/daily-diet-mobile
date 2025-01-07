import styled from "styled-components/native";
import { Circle, PencilSimple, Trash } from "phosphor-react-native";

interface MealDetailsProps {
  isWithinDiet: boolean
}

export const Container = styled.View<MealDetailsProps>`
  flex: 1;
  background-color: ${({ theme, isWithinDiet }) => isWithinDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
` 

export const Details = styled.View`
  flex: 1;
  margin-top: -28px;
  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px;

  justify-content: space-between;
`

export const MealName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const MealDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const MealDatetimeTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const MealType = styled.View`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 999px;

  flex-direction: row;
  align-items: center;
  gap: 8;
`

export const MealTypeIcon = styled(Circle).attrs<MealDetailsProps>(({ theme, isWithinDiet }) => ({
  size: 8,
  color: isWithinDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: 'fill'
}))``

interface ActionButtonProps {
  variant?: 'primary' | 'secondary'
}

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  padding: 16px;

  background-color: ${({ theme, variant = 'primary' }) => variant === 'primary' ? theme.COLORS.GRAY_600 : 'transparent'};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  gap: 12px;
`

export const ActionButtonTitle = styled.Text<ActionButtonProps>`
  color: ${({ theme, variant = 'primary' }) => variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const ActionButtonPencilIcon = styled(PencilSimple).attrs<ActionButtonProps>(({ theme, variant = 'primary' }) => ({
  size: 18,
  color: variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``

export const ActionButtonTrashIcon = styled(Trash).attrs<ActionButtonProps>(({ theme, variant = 'primary' }) => ({
  size: 18,
  color: variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``