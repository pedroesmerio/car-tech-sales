import React, { useState } from 'react';

import {
  Container,
  Title,
  ButtonText,
  ButtonAuto,
  ButtonManual
} from './styles';

type TransProps = {
  type: 1 | 2;
}

export function TransmissionTypeButton({ type }: TransProps) {
  const [autoSelected, setAutoSelected] = useState('')
  const [manualSelected, setManualSelected] = useState('')

  return (
    <Container >
      <Title>Transmissão</Title>
      <ButtonAuto isActive={autoSelected} onPress={type === 1 ? setAutoSelected('auto') : setAutoSelected('')}>
        <ButtonText>
          Automático
        </ButtonText>
      </ButtonAuto>
      <ButtonManual isActive={manualSelected} onPress={type === 2 ? setManualSelected('manual') : setAutoSelected('')}>
        <ButtonText>
          Mecânico
        </ButtonText>
      </ButtonManual>
    </Container>
  );
}
