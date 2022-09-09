import React, { useState } from 'react'

import { Button } from '@src/components/Button'
import { InputForm } from '@src/components/Form/InputForm'
import {
  ButtonContainer,
  ButtonText,
  Container,
  DoubleInputContainer,
  Form,
  Title,
  TransmissionButton,
  TransmissionContainer,
  TransmissionTitle,
} from './styles'

type FormDataProps = {
  idMobile: string;
  name: string;
  year: number;
  type: string;
  basePrice: number;
  transmission: number;
  brand: string;
  fuel: number;
  model: number;
  color: string;
  imgUrl: string;
  acessories: [{}];
}

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  idMobile: Yup
    .string().required(),
  name: Yup
    .string().required(),
  year: Yup
    .number().required().min(4).max(4).integer(),
  type: Yup
    .string().required(),
  basePrice: Yup
    .number().required().integer(),
  transmission: Yup
    .string().required(),
  brand: Yup
    .string().required(),
  fuel: Yup
    .number().required().integer(),
  model: Yup
    .string().required(),
  color: Yup
    .string().required(),
});

import { useForm } from 'react-hook-form';

export default function CarRegister() {
  const [newRegister, setNewRegister] = useState<FormDataProps>({
    idMobile: '',
    name: '',
    year: 0,
    type: '',
    basePrice: 0,
    transmission: 0,
    brand: '',
    fuel: 0,
    model: 0,
    color: '',
    imgUrl: '',
    acessories: [{}],
  })

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleRegister(form: FormDataProps) {
    setNewRegister({
      idMobile: form.idMobile,
      name: form.name,
      year: form.year,
      type: form.type,
      basePrice: form.basePrice,
      transmission: 0,
      brand: form.brand,
      fuel: form.fuel,
      model: form.model,
      color: form.color,
      imgUrl: form.imgUrl,
      acessories: [{}],
    })
    console.log(newRegister);
  }

  return (
    <Container>
      <Form>
        <InputForm
          name="name"
          title="Nome"
          control={control}
          placeholder="Nome"
          keyboardType='default'
          autoCapitalize="sentences"
          autoCorrect={false}
        />
        <DoubleInputContainer>
          <InputForm
            name="year"
            title="Ano"
            control={control}
            placeholder="Ano"
            keyboardType='numeric'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
          <InputForm
            name="color"
            title="Cor"
            control={control}
            placeholder="Cor"
            keyboardType='default'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
        </DoubleInputContainer>
        <DoubleInputContainer>
          <InputForm
            name="brand"
            title="Marca"
            control={control}
            placeholder="Marca"
            keyboardType='default'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
          <InputForm
            name="basePrice"
            title="Preço"
            control={control}
            placeholder="Preço"
            keyboardType='numeric'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
        </DoubleInputContainer>

        <TransmissionTitle>Transmissão</TransmissionTitle>
        <TransmissionContainer>
          <TransmissionButton isActive={true} onPress={() => console.log('apertou')}>
            <ButtonText>Automático</ButtonText>
          </TransmissionButton>
          <TransmissionButton isActive={false} onPress={() => console.log('apertou')}>
            <ButtonText>Automático</ButtonText>
          </TransmissionButton>
        </TransmissionContainer>

        <ButtonContainer>
          <Button
            name="Salvar"
            type='save'
            onPress={handleSubmit(handleRegister)}
          />
        </ButtonContainer>
      </Form>
    </Container>
  )
}

