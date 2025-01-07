import { Text, TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import React from "react";

interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
  type?: 'date' | 'time'
}

export function Input({ inputRef, value, type, ...rest }: InputProps) {
  const { COLORS } = useTheme()

  function formatDate(date: string) {
    const separatedDate = date.split('')

    if(separatedDate.length === 2) {
      separatedDate.splice(2, 0, '/')
    }
    
    if(separatedDate.length === 5) {
      separatedDate.splice(5, 0, '/')
    }

    return separatedDate.join('')
  }

  function formatTime(time: string) {
    const separatedTime = time.split('')

    if(separatedTime.length === 2) {
      separatedTime.splice(2, 0, ':')
    }

    return separatedTime.join('')
  }

  return (
    <Container 
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    >
      {(value && type === 'date') && <Text>{formatDate(value)}</Text>}
      {(value && type === 'time') && <Text>{formatTime(value)}</Text>}
    </Container>
  )
}