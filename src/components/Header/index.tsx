import React from 'react'

import {
  HeaderHomeContainer,
  Logo,
  TotalText,
  HeaderDetailContainer,
  FeatherIcon,
  Title,
  IconContainer
} from './styles'

export function Header() {
  return (
    <HeaderHomeContainer>
      <Logo source={require('/assets/Logo.png')} />
      <TotalText>Total de 4 carros</TotalText>
    </HeaderHomeContainer>
  )
}

type DetailHeaderProps = {
  title: string;
}

export function DetailHeader(props: DetailHeaderProps) {
  return (
    <HeaderDetailContainer>
      <IconContainer>
        <FeatherIcon name='chevron-left' />
      </IconContainer>

      <Title>{props.title}</Title>

      <IconContainer>
        <FeatherIcon name='trash' />
      </IconContainer>
    </HeaderDetailContainer>
  )
}
