import React from 'react'

import {
  Container,
  Title
} from './styles';

//Todo: Form functionality & realm register
// import { useForm } from 'react-hook-form';
// import * as Yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = Yup.object().shape({
//   idMoble: Yup
//   .string(),
//   acessorie: Yup
//   .number(),
//   price: Yup
//   .number(),
// })

// type FormDataProps = {
//   idMobile: string;
//   acessorie: number,
//   price: number,
// }

export function Modal() {
  // const [acessorieList, setAcessorieList] = useState<FormDataProps>({
  //   idMobile: '',
  //   acessorie: 0,
  //   price: 0
  // })

  // const {
  //   control,
  //   handleSubmit,
  // } = useForm({
  //   resolver: yupResolver(schema)
  // });

  // async function handleAccessorieRegister(inputData, buttonData) {
  //   setAcessorieList({
  //     idMobile: '',
  //     acessorie: 0,
  //     price: 0
  //   })
  // }

  return (
    <Container>
      <Title>Novo acessório</Title>

      <Title>Preço</Title>
    </Container>
  )
}
