import React from 'react'
import { Container, Logo, ViewLogo } from './styles'
import myCapitalLogo from '../../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <ViewLogo>
        <Logo source={myCapitalLogo} />
      </ViewLogo>
    </Container>
  )
}
