import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, ButtonTitle } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  typeColor?: 'PRIMARY'
}

export function Button({ title, typeColor = 'PRIMARY', ...rest }: Props) {
  return (
    <Container typeColor={typeColor} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </Container>
  )
}
