import React from 'react'
import { FlatList } from 'react-native';


import theme from '@src/global/styles/theme';

import { Header } from '@src/components/Header'

import Icon from 'react-native-vector-icons/Feather';

import { Container, SearchInput, Title } from './styles'

export default function Home() {
  return (
    <Container>
      <Header />

      <SearchInput placeholder="Pesquisar">
        <Icon name="search" size={30} color={theme.colors.gray_medium} />
      </SearchInput>

      <Title>Nenhum carro escontrado</Title>
    </Container>
  )
}
