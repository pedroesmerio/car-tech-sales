import React from 'react';

import { Container, InfoCar, Option, Title, TitleValue, InfoImg, OptionContainer, PriceContainer, Pricevalue } from './styles';

type CardProps = {
  name: string;
  brand: string;
  year: number;
  transmission: string;
  fuel: string;
  type: string;
  basePrice: number;
  imgUrl: string;
}

export function Card(props: CardProps) {
  return (
    <Container>
      <InfoCar>
        <OptionContainer>
          <Option>
            <Title>Nome</Title>
            <TitleValue>{props.name}</TitleValue>
          </Option>
          <Option>
            <Title>Marca</Title>
            <TitleValue>{props.brand}</TitleValue>
          </Option>
          <Option>
            <Title>Ano</Title>
            <TitleValue>{props.year}</TitleValue>
          </Option>
          <Option>
            <Title>Trans.</Title>
            <TitleValue>{props.transmission}</TitleValue>
          </Option>
          <Option>
            <Title>Comb.</Title>
            <TitleValue>{props.fuel}</TitleValue>
          </Option>
          <Option>
            <Title>Tipo</Title>
            <TitleValue>{props.type}</TitleValue>
          </Option>
        </OptionContainer>

        <PriceContainer>
          <Title>Preço</Title>
          <Pricevalue>R$ {props.basePrice}</Pricevalue>
        </PriceContainer>
      </InfoCar>

      <InfoImg
        source={{ uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/${props.imgUrl}` }}
        resizeMode='contain'
      />
      {/* <InfoImg source={require('assets/cars/pickup.png')} /> */}
    </Container>
  );
}
