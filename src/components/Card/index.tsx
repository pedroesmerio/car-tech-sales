import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  InfoCar,
  Option,
  Title,
  TitleValue,
  InfoImg,
  OptionContainer,
  PriceContainer,
  Pricevalue
} from './styles';

interface CardProps extends TouchableOpacityProps {
  name: string;
  brand: string;
  year: number;
  transmission: string;
  fuel: string;
  type: string;
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
            <TitleValue>{transmission}</TitleValue>
          </Option>
          <Option>
            <Title>Comb.</Title>
            <TitleValue>{fuel}</TitleValue>
          </Option>
          <Option>
            <Title>Tipo</Title>
            <TitleValue>{type}</TitleValue>
          </Option>
        </OptionContainer>

        <PriceContainer>
          <Title>Preço</Title>
          <Pricevalue>R$ {basePrice}</Pricevalue>
        </PriceContainer>
      </InfoCar>

      <InfoImg
        source={{ uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/${imgUrl}` }}
        resizeMode='contain'
      />
    </Container>
  );
}
