import React from 'react'
import { Container, Text } from './styles'
import { currencyFormat } from '../../utils/currencyBRL'

type Props = {
  code: string
  name: string
  date: string
  price: string
}

export function Card({ code, date, name, price }: Props) {
  return (
    <Container>
      <Text>{code}</Text>
      <Text>{name}</Text>
      <Text>{date}</Text>
      <Text>{currencyFormat(parseInt(price))}</Text>
    </Container>
  )
}
