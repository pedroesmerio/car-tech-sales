import React from 'react'

import {
  HeaderHomeContainer,
  Logo,
  TotalText,
} from './styles'

export function Header(totalCars) {
  const cars = Number(Object.values(totalCars))

  return (
    <HeaderHomeContainer>
      <Logo source={require('/assets/Logo.png')} />
      <TotalText>Total de {cars} carros</TotalText>
    </HeaderHomeContainer>
  )
}
