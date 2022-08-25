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

export function AcessorieItem(props: AcessorieProps) {

  return (
    <ItemContainer>
      <NameView>
        <FeatherIcon name='trash' onPress={() => console.log('Apagou o acessório')} />
        <Title align='left' color='offWhite'>{props.acessorieName}</Title>
      </NameView>
      <PriceView>
        <Title align='left' color=''>R$ {props.price},00</Title>
      </PriceView>
    </ItemContainer>
  );
}
