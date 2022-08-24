import React from 'react';

import {
  Container,
  IconContainer,
  Title,
  TitleValue,
  OptionContainer,
  FeatherIcon,
} from './styles';

type SpecificationCardProps = {
  iconName: string;
  name: 'Cor' | 'Combustível' | 'Tipo' | 'Transmissão';
  value: string;
}

export function SpecificationCard(props: SpecificationCardProps) {
  return (
    <Container>
      <IconContainer>
        <FeatherIcon name={props.iconName} />
      </IconContainer>

      <OptionContainer>
        <Title>{props.name}</Title>
        <TitleValue>{props.value}</TitleValue>
      </OptionContainer>
    </Container>
  );
}
