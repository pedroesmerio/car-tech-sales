import React from 'react';

import { Container, Title } from './styles'

type ButtonProps = {
  name: string;
  type: 'add' | 'save';
}

export function Button({ name, type, }: ButtonProps) {
  return (
    <Container type={type}>
      <Title>{name}</Title>
    </Container>
  );
}

