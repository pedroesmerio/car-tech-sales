import React from 'react';

import { Container, EditButtonContainer, Title } from './styles'

type ButtonProps = {
  name: string;
  type: 'add' | 'save';
  onPress: () => void;
}

type EditButtonProps = {
  name: string;
  type: 'add' | 'edit';
  onPress: () => void;
}

export function Button({ name, type }: ButtonProps) {
  return (
    <Container type={type}>
      <Title>{name}</Title>
    </Container>
  );
}

export function EditButton({ name, type }: EditButtonProps) {
  return (
    <EditButtonContainer type={type}>
      <Title>{name}</Title>
    </EditButtonContainer>
  );
}

