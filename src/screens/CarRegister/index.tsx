import React, { useState } from 'react'

import { Button } from '@src/components/Button'
import { InputForm } from '@src/components/Form/InputForm'

import {
  ButtonText, ButtonContainer,
  Container, Title,
  TransmissionButton, TransmissionContainer,
  TypeButtom, TypeContainer, Types, CombContainer, Combs, CombButtom,
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
import { ScrollView } from 'react-native'

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

  const { control, handleSubmit } = useForm({
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
      <Title>Nome</Title>
      <InputForm
        name="name"
        control={control}
        placeholder="Nome"
        keyboardType='default'
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Title>Ano</Title>
      <InputForm
        name="year"
        control={control}
        placeholder="Ano"
        keyboardType='number-pad'
        autoCapitalize="sentences"
        autoCorrect={false}
      />
      <Title>Cor</Title>
      <InputForm
        name="color"
        control={control}
        placeholder="Cor"
        keyboardType='default'
        autoCapitalize="sentences"
        autoCorrect={false}
      />
      <Title>Marca</Title>
      <InputForm
        name="brand"
        control={control}
        placeholder="Marca"
        keyboardType='default'
        autoCapitalize="sentences"
        autoCorrect={false}
      />
      <Title>Preço</Title>
      <InputForm
        name="basePrice"
        control={control}
        placeholder="Preço"
        keyboardType='number-pad'
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Title>Transmissão</Title>
      <TransmissionContainer>
        <TransmissionButton
          isActive={true}
          onPress={() => console.log('apertou')}
        >
          <ButtonText isActive={true}>Automático</ButtonText>
        </TransmissionButton>
        <TransmissionButton
          isActive={false}
          onPress={() => console.log('apertou')}
        >
          <ButtonText isActive={false}>Manual</ButtonText>
        </TransmissionButton>
      </TransmissionContainer>

      <Title>Tipo</Title>
      <TypeContainer>
        <Types
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <ScrollView horizontal={true}>
            <TypeButtom
              key={1}
              isActive={false}
              onPress={() => console.log('SUV')}
            >
              <ButtonText isActive={false}>SUV</ButtonText>
            </TypeButtom>
            <TypeButtom
              key={2}
              isActive={true}
              onPress={() => console.log('SEDAN')}
            >
              <ButtonText isActive={true}>SEDAN</ButtonText>
            </TypeButtom>
            <TypeButtom
              key={3}
              isActive={false}
              onPress={() => console.log('HATCH')}
            >
              <ButtonText isActive={false}>HATCH</ButtonText>
            </TypeButtom>
            <TypeButtom
              key={4}
              isActive={false}
              onPress={() => console.log('TRUCK')}
            >
              <ButtonText isActive={false}>CAMINHONETE</ButtonText>
            </TypeButtom>
            <TypeButtom
              key={5}
              isActive={false}
              onPress={() => console.log('COMPACT')}
            >
              <ButtonText isActive={false}>COMPACTO</ButtonText>
            </TypeButtom>
          </ScrollView>
        </Types>
      </TypeContainer>

      <Title>Combustível</Title>
      <CombContainer>
        <Combs
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <ScrollView horizontal={true}>
            <CombButtom
              key={1}
              isActive={false}
              onPress={() => console.log('DIESEL')}
            >
              <ButtonText isActive={false}>Diesel</ButtonText>
            </CombButtom>
            <CombButtom
              key={2}
              isActive={true}
              onPress={() => console.log('GASOLINE')}
            >
              <ButtonText isActive={true}>Gasolina</ButtonText>
            </CombButtom>
            <CombButtom
              key={3}
              isActive={false}
              onPress={() => console.log('ETANOL')}
            >
              <ButtonText isActive={false}>Etanol</ButtonText>
            </CombButtom>
            <CombButtom
              key={4}
              isActive={false}
              onPress={() => console.log('ELETRIC')}
            >
              <ButtonText isActive={false}>Eletrico</ButtonText>
            </CombButtom>
            <CombButtom
              key={5}
              isActive={false}
              onPress={() => console.log('HIBRID')}
            >
              <ButtonText isActive={false}>Híbrido</ButtonText>
            </CombButtom>
          </ScrollView>
        </Combs>
      </CombContainer>

      <ButtonContainer>
        <Button
          name='Adicionar'
          type='save'
          onPress={() => console.log('do this')}
        />
      </ButtonContainer>
    </Container >
  )
}

