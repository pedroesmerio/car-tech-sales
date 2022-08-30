import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { AcessorieItem } from '@src/components/AcessoriesList';
import { EditButton } from '@src/components/Button';
import { SpecificationCard } from '@src/components/Card/SpecificationCard';
import { ScrollView } from 'react-native';

import {
  Container,
  ImageContainer,
  CarImage,
  BrandName,
  CarName,
  Title,
  SpecificationContainer,
  PriceContainer,
  AcessoriesContainer,
  PriceTitle,
  FooterContainer,
  Cards,
  AcessItems,
} from './styles'

export default function CarDetail() {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ImageContainer>
          <CarImage
            source={{ uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/pickup.png` }}
            resizeMode='contain'
          />
          <BrandName>toyota</BrandName>
          <CarName align='center'>Hilux - 2022</CarName>
        </ImageContainer>

        <SpecificationContainer>
          <Title align='left'>Especificações</Title>
          <Cards showsHorizontalScrollIndicator={false} bounces={false}>
            <ScrollView horizontal={true}>
              <SpecificationCard name='Cor' iconName='format-color-fill' value='Branco' />
              <SpecificationCard name='Combustível' iconName='fuel' value='Diesel' />
              <SpecificationCard name='Tipo' iconName='car' value='Pickup' />
              <SpecificationCard name='Transmissão' iconName='cog' value='Auto' />
            </ScrollView>
          </Cards>
        </SpecificationContainer>

        <AcessoriesContainer>
          <Title align='left'>Acessórios</Title>
          <AcessItems>
            <AcessorieItem
              acessorieName='Ar Condicionado'
              price={2700}
            />
            <AcessorieItem
              acessorieName='Ar Condicionado'
              price={2700}
            />
          </AcessItems>
        </AcessoriesContainer>

        <FooterContainer>
          <PriceContainer>
            <Title align='left'>R$ 230.980</Title>
            <PriceTitle align='left'>Preço</PriceTitle>
          </PriceContainer>
          <EditButton name='EDITAR' type='edit' onPress={() => navigation.navigate('carRegister')} />
        </FooterContainer>
      </Container>
    </>
  );
}
