import { Header } from '@components/Header'
import React from 'react'
import { Container, Content } from './styles'

import { Button } from '@components/Button'

export function Register() {
  return (
    <Container>
      <Header />
      <Content>
        <Button title="registrar" />
      </Content>
    </Container>
  )
}
