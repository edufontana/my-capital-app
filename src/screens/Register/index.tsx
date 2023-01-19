import { Header } from '@components/Header'
import React from 'react'
import { Container, Content, TitleText, TitleView } from './styles'

import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function Register() {
  return (
    <Container>
      <Header />
      <Content>
        <TitleView>
          <TitleText>Registrar uma ação</TitleText>
        </TitleView>

        <Input style={{ marginTop: 25 }} placeholder="código" />
        <Input style={{ marginTop: 15 }} placeholder="Nome" />
        <Input style={{ marginTop: 15 }} placeholder="data" />
        <Input style={{ marginTop: 15 }} placeholder="valor" />
        <Button title="registrar" style={{ marginTop: 26 }} />
      </Content>
    </Container>
  )
}
