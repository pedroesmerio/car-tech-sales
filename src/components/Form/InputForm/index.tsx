import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container } from './styles';
import { Title } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  control: Control;
  name: string;
}

export function InputForm({
  control,
  name,
  placeholder,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Title>{placeholder}</Title>
            <Input
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          </>
        )}
        name={name}
      />
    </Container>
  );
}
