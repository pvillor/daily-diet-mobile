import { Text, TouchableOpacityProps } from "react-native";
import { OptionButtonTypeStyleProps, Container, Icon } from "./styles";

interface OptionButton extends TouchableOpacityProps {
  title: string
  type?: OptionButtonTypeStyleProps
  isSelected?: boolean
}

export function OptionButton({ title, type = 'PRIMARY', isSelected = false, ...rest }: OptionButton) {
  return (
    <Container type={type} isSelected={isSelected} {...rest}>
      <Icon type={type} />
      <Text>{title}</Text>
    </Container>
  )
}
