import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Circle } from "phosphor-react-native";

export type OptionButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface ContainerProps {
  isSelected?: boolean
  type: OptionButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 100%;
  min-height: 50px;
  
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, isSelected, type }) => isSelected ? 
      type === 'PRIMARY' ? 
        theme.COLORS.GREEN_LIGHT 
        : theme.COLORS.RED_LIGHT 
    : theme.COLORS.GRAY_200};
  border-width: ${({ isSelected }) => isSelected ? '1px' : 0};
  border-color: ${({ theme, isSelected, type }) => isSelected && 
      type === 'PRIMARY' ? 
        theme.COLORS.GREEN_DARK 
        : theme.COLORS.RED_DARK};
  border-radius: 6px;

  flex-direction: row;
  gap: 8px;
`

interface IconProps {
  type: OptionButtonTypeStyleProps
}

export const Icon = styled(Circle).attrs<IconProps>(({ theme, type = true }) => ({
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 8,
  weight: 'fill'
}))``