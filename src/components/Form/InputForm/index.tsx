import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';

import { Container } from './styles';
import { Title } from './styles';

interface Props extends TextInputProps {
  name: string;
  title: string;
  placeholder: string;
  control: Control;
}

export function InputForm({
  name,
  title,
  placeholder,
  control,
  ...rest
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Title>{title}</Title>
            <Input
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              {...rest}
            />
          </>
        )}
        name={name}
      />
    </Container>
  );
}
