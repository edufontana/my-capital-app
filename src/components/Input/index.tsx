import React from 'react'
import { Container } from './styles'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps

export function Input({ ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    ></Container>
  )
}
