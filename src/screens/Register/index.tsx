import { Header } from '@components/Header'
import React, { useContext, useState } from 'react'
import { Container, Content, TitleText, TitleView, Text } from './styles'

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Register() {
  const { handleAddNewStock } = useContext(TransactionsContext)
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [date, setDate] = useState('01-01-2023')
  const [price, setPrice] = useState('')

  return (
    <Container>
      <Header />
      <Content>
        <TitleView>
          <TitleText>Registrar uma ação</TitleText>
        </TitleView>

        <Input
          style={{ marginTop: 25 }}
          placeholder="código"
          onChangeText={(t) => setCode(t)}
          value={code}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="Nome"
          onChangeText={(t) => setName(t)}
          value={name}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="date"
          onChangeText={(t) => setDate(t)}
          value={date}
        />
        <Input
          style={{ marginTop: 15 }}
          placeholder="valor"
          onChangeText={(t) => setPrice(t)}
          value={price}
        />
        <Button
          title="registrar"
          style={{ marginTop: 26 }}
          onPress={() => {
            handleAddNewStock({ code, name, date, price })
          }}
        />
      </Content>
    </Container>
  )
}
