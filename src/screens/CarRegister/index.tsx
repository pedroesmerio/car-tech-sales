import React, { useState } from 'react'
import { Button } from '@src/components/Button'
import { InputForm } from '@src/components/Form/InputForm'
import { TransmissionTypeButton } from '@src/components/Form/TransmissionTypeButton'

type FormData = {
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
  acessories: {};
}

import {
  ButtonContainer,
  Container,
  Fields,
  Form,
  TransmissionTypes
} from './styles'

import { useForm } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function CarRegister() {
  const [transmissionType, setTransmissionType] = useState('');

  const [newRegister, setNewRegister] = useState({
    key: '',
    name: '',
    brand: '',
    year: {},
    transmission: {},
    fuel: {},
    type: '',
    basePrice: {},
    imgUrl: '',
    acessoriesItems: [{}]
  })

  function handleTransmissionTypeSelect(type: 'positive' | 'negative') {
    setTransmissionType(type);
  }

  //Todo: Verifications
  const schema = Yup.object().shape({
    key: Yup
      .string(),
    name: Yup
      .string(),
    brand: Yup
      .number(),
    year: Yup
      .number(),
    transmission: Yup
      .string(),
    fuel: Yup
      .string(),
    type: Yup
      .string(),
    basePrice: Yup
      .number(),
    imgUrl: Yup
      .string(),
  });

  const {
    control,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema)
  });


  async function handleRegister(form: FormData) {
    setNewRegister({
      key: form.idMobile,
      name: form.name,
      brand: form.brand,
      year: form.year,
      transmission: form.transmission,
      fuel: form.fuel,
      type: form.type,
      basePrice: form.basePrice,
      imgUrl: form.imgUrl,
      acessoriesItems: [{}]
    })
  }


  return (
    <>
      <Container>
        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome" autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              name="year"
              control={control}
              placeholder="Ano"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              name="color"
              control={control}
              placeholder="Cor"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              name="brand"
              control={control}
              placeholder="Marca"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm
              name="basePrice"
              control={control}
              placeholder="Preço"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <TransmissionTypes>
              <TransmissionTypeButton
                type="up"
                title="Automático"
                onPress={() => handleTransmissionTypeSelect('positive')}
                isActive={transmissionType === 'positive'}
              />
              <TransmissionTypeButton
                type="down"
                title="Manual"
                onPress={() => handleTransmissionTypeSelect('negative')}
                isActive={transmissionType === 'negative'}
              />
            </TransmissionTypes>
          </Fields>


          <ButtonContainer>
            <Button
              name="Salvar"
              type='save'
              onPress={handleSubmit(handleRegister)}
            />
          </ButtonContainer>
        </Form>
      </Container>
    </>
  )
}

