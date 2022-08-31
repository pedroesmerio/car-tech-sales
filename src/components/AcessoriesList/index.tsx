import React from 'react';

import {
  ItemContainer,
  Title,
  FeatherIcon,
  NameView,
  PriceView
} from './styles'

type AcessorieProps = {
  acessorieName: string;
  price: number;
}

export function AcessorieItem({
  acessorieName,
  price
}: AcessorieProps) {

  return (
    <ItemContainer>
      <NameView>
        <FeatherIcon name='trash' onPress={() => console.log('Apagou o acessório')} />
        <Title align='left' color='offWhite'>{acessorieName}</Title>
      </NameView>
      <PriceView>
        <Title align='left' color=''>R$ {price},00</Title>
      </PriceView>
    </ItemContainer>
  );
}
