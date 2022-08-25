import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  Button
} from './styles';


interface Props extends RectButtonProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransmissionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props) {
  return (
    <Container
      isActive={isActive}
      type={type}

    >
      <Button
        {...rest}
      >
        <Title>
          {title}
        </Title>
      </Button>
    </Container>
  );
}
