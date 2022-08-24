import React, { useState } from 'react'

import { Button } from '@src/components/Button'
import { InputForm } from '@src/components/Form/InputForm'
import { TransmissionTypeButton } from '@src/components/Form/TransmissionTypeButton'

import {
  ButtonContainer,
  Container,
  DoubleInputContainer,
  Form,
  TransmissionTypes
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
  const [transmissionType, setTransmissionType] = useState<number>(0);

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
      transmission: transmissionType,
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
          control={control}
          placeholder="Nome"
          keyboardType='default'
          autoCapitalize="sentences"
          autoCorrect={false}
        />
        <DoubleInputContainer>
          <InputForm
            name="year"
            control={control}
            placeholder="Ano"
            keyboardType='numeric'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
          <InputForm
            name="color"
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
            control={control}
            placeholder="Marca"
            keyboardType='default'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
          <InputForm
            name="basePrice"
            control={control}
            placeholder="Preço"
            keyboardType='numeric'
            autoCapitalize="sentences"
            autoCorrect={false}
          />
        </DoubleInputContainer>

        {/* <TransmissionTypes> */}
        {/*   <TransmissionTypeButton */}
        {/*     type={1} */}
        {/*     onPress={setTransmissionType(1)} */}
        {/*   /> */}
        {/* </TransmissionTypes> */}

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

