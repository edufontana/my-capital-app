import React from 'react'
import { Container, Logo } from './styles'
import myCapitalLogo from '@assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={myCapitalLogo} />
    </Container>
  )
}
