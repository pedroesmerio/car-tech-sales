import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, EditButtonContainer, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  name: string;
  type: 'add' | 'save';
  onPress: () => void;
}

export function Button({
  name,
  type,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} onPress={onPress} {...rest}>
      <Title>{name}</Title>
    </Container>
  );
}

type EditButtonProps = {
  name: string;
  type: 'add' | 'edit';
}

export function EditButton({ name, type }: EditButtonProps) {
  return (
    <EditButtonContainer type={type} onPress={onPress} {...rest}>
      <Title>{name}</Title>
    </EditButtonContainer>
  );
}

