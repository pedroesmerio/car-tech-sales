import { EditButton } from '@src/components/Button';
import { DetailHeader } from '@src/components/Header';
import React from 'react'

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
