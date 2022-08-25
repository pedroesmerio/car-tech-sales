import React from 'react'

import { Header } from '@src/components/Header'

import { Container, NoCarContainer, Title } from './styles'

import { carList } from '@src/utils/carsList'

import { Button } from '@src/components/Button'
import { FlatList } from 'react-native'
import { Card } from '@src/components/Card'

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <Container>

        <FlatList
          data={carList}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Card
              key={item.key}
              name={item.name}
              brand={item.brand}
              year={item.year}
              transmission={item.transmission}
              fuel={item.fuel}
              type={item.type}
              basePrice={item.basePrice}
              imgUrl={item.imgUrl}
              onPress={() => navigation.navigate('carDetail')}
            />
          )}
          style={{ flex: 1, width: '100%' }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoCarContainer>
              <Title>
                Nenhum carro encontrado
              </Title>
              <Button
                name='ADICIONAR'
                type='add'
                onPress={() => navigation.navigate('carDetail')}
              />
            </NoCarContainer>
          )}
        />

      </Container>
    </>
  )
}
