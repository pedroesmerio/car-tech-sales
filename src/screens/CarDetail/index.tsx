import { EditButton } from '@src/components/Button';
import { SpecificationCard } from '@src/components/Card/SpecificationCard';
import { DetailHeader } from '@src/components/Header';
import React from 'react'
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
} from './styles'

export default function CarDetail() {

  return (
    <>
      <Container>
        <DetailHeader title='Detalhes do Carro' />
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
          <Cards>
            <ScrollView horizontal={true}>
              <SpecificationCard name='Cor' iconName='format-color-fill' value='Branco' />
              <SpecificationCard name='Combustível' iconName='fuel' value='Diesel' />
              <SpecificationCard name='Tipo' iconName='color' value='' />
              <SpecificationCard name='Transmissão' iconName='color' value='Branco' />
            </ScrollView>
          </Cards>
        </SpecificationContainer>

        <AcessoriesContainer>
          <Title align='left'>Acessórios</Title>
        </AcessoriesContainer>

        <FooterContainer>
          <PriceContainer>
            <Title align='left'>R$ 230.980</Title>
            <PriceTitle align='left'>Preço</PriceTitle>
          </PriceContainer>
          <EditButton name='EDITAR' type='edit' />
        </FooterContainer>
      </Container>
    </>
  );
}
