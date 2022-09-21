import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, InfoCar,
  Option, Title, TitleValue,
  InfoImg, OptionContainer,
  PriceContainer, Pricevalue
} from './styles';

interface CardProps extends TouchableOpacityProps {
  key: string;
  name: string;
  brand: string;
  year: number;
  transmission: number;
  fuel: number;
  type: number;
  basePrice: number;
  imgUrl: string;
  onPress: () => void;
}

export function Card({
  name,
  brand,
  year,
  transmission,
  fuel,
  type,
  basePrice,
  imgUrl,
  onPress,
  ...rest
}: CardProps) {

  function getTypeName(index: number) {
    switch (index) {
      case 1:
        return "SUV"
        break;
      case 2:
        return "Sedan"
        break;
      case 3:
        return "Hatch"
        break;
      case 4:
        return "Pickup"
        break;
      case 5:
        return "Compac."
        break;
      default:
        break;
    }
  }

  function getTransmissionType(index: number) {
    switch (index) {
      case 1:
        return "Auto."
        break;
      case 2:
        return "Man."
        break;
      default:
        break;
    }
  }

  function getFuelType(index: number) {
    switch (index) {
      case 1:
        return "Diesel"
        break;
      case 2:
        return "Gas."
        break;
      case 3:
        return "Etanol"
        break;
      case 4:
        return "Eletr."
        break;
      case 5:
        return "Híb."
        break;
      case 6:
        return "Flex"
        break;
      default:
        break;
    }
  }

  const price = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(basePrice);

  return (
    <Container onPress={onPress} {...rest}>
      <InfoCar>
        <OptionContainer>
          <Option>
            <Title>Nome</Title>
            <TitleValue>{name}</TitleValue>
          </Option>
          <Option>
            <Title>Marca</Title>
            <TitleValue>{brand}</TitleValue>
          </Option>
          <Option>
            <Title>Ano</Title>
            <TitleValue>{year}</TitleValue>
          </Option>
          <Option>
            <Title>Trans.</Title>
            <TitleValue>{getTransmissionType(transmission)}</TitleValue>
          </Option>
          <Option>
            <Title>Comb.</Title>
            <TitleValue>{getFuelType(fuel)}</TitleValue>
          </Option>
          <Option>
            <Title>Tipo</Title>
            <TitleValue>{getTypeName(type)}</TitleValue>
          </Option>
        </OptionContainer>

        <PriceContainer>
          <Title>Preço</Title>
          <Pricevalue>{price}</Pricevalue>
        </PriceContainer>
      </InfoCar>

      <InfoImg
        source={{ uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/${imgUrl}` }}
        resizeMode='contain'
      />
    </Container>
  );
}
