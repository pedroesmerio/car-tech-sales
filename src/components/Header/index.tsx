import React from 'react'

import { Container, Logo, TotalText } from './styles'

export function Header() {
  return (
    <Container>
      <Logo source={require('/assets/Logo.png')} />
      <TotalText>Total de 4 carros</TotalText>
    </Container>
  )
}
