import { useObject, useRealm } from "@src/database/realm";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";
import uuid from "react-native-uuid";

import { Button } from "@src/components/Button";
import { Input } from "@src/components/Form/Input";

import {
  ButtonContainer,
  ButtonText,
  CombButtom,
  CombContainer,
  Combs,
  Container,
  Title,
  TransmissionButton,
  TransmissionContainer,
  TypeButtom,
  TypeContainer,
  Types,
} from "./styles";

import { RootStackScreenProps } from "@src/routes/types";
import * as Yup from "yup";
import { ResponseProps } from "../CarDetail";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Você deve inserir um nome!"),
  year: Yup.number().required("Você deve inserir o ano!").integer(),
  type: Yup.string().required("Você deve selecionar um tipo para o carro!"),
  basePrice: Yup.number()
    .required("Você deve definir um Preço para o carro!")
    .integer(),
  transmission: Yup.string().required(
    "Você deve selecionar o tipo da transmissão!"
  ),
  brand: Yup.string().required("Você deve inserir a marca do carro!"),
  fuel: Yup.number()
    .required("Você deve selecionar o tipo de combustível!")
    .integer(),
  color: Yup.string().required("Você deve inserie uma cor para o carro!"),
});

export default function CarRegister({
  navigation,
  route,
}: RootStackScreenProps<"CarRegister">) {
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [type, setType] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [transmission, setTransmission] = useState(0);
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState(0);
  const [color, setColor] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const carData = useObject<ResponseProps>(
    "CarTable",
    route.params?.IdMobile || ""
  );

  useEffect(() => {
    if (carData) {
      setName(carData.Name);
      setYear(carData.Year);
      setType(carData.Model);
      setBasePrice(carData.BasePrice);
      setTransmission(carData.Transmission);
      setBrand(carData.Brand);
      setFuel(carData.Fuel);
      setColor(carData.Color);
      setImgUrl(carData.ImgUrl);
    }
  }, []);

  const realm = useRealm();

  function handleType(index: number) {
    switch (index) {
      case 1:
        setType(index);
        setImgUrl("suv.png");
        break;
      case 2:
        setType(index);
        setImgUrl("sedan.png");
        break;
      case 3:
        setType(index);
        setImgUrl("hatch.png");
        break;
      case 4:
        setType(index);
        setImgUrl("pickup.png");
        break;
      case 5:
        setType(index);
        setImgUrl("compact.png");
        break;
      default:
        break;
    }
  }

  const addNewCar = useCallback(async () => {
    try {
      const fields = {
        name,
        year,
        type,
        basePrice,
        transmission,
        brand,
        fuel,
        color,
        imgUrl,
      };

      await schemaValidation.validate(fields);

      const carObject = {
        IdMobile: !carData ? uuid.v4().toString() : carData.IdMobile,
        Name: name,
        Year: year,
        BasePrice: basePrice,
        Transmission: transmission,
        Brand: brand,
        Fuel: fuel,
        Model: type,
        Color: color,
        ImgUrl: imgUrl,
        Date: !carData ? new Date() : carData.Date,
      };

      realm.write(() => {
        const created = realm.create(
          "CarTable",
          carObject,
          Realm.UpdateMode.Modified
        );
      });

      Alert.alert("Sucesso", "Carro cadastro com sucesso!");
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1500);
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Error", `${error}`);
      } else Alert.alert("Error", "Não foi possível registra carro!");
    }
  }, [name, year, type, basePrice, transmission, brand, fuel, color, imgUrl]);

  function handleName(value: string) {
    setName(value);
  }

  function handleYear(value: string) {
    setYear(Number(value));
  }

  function handleColor(value: string) {
    setColor(value);
  }

  function handlePrice(value: string) {
    setBasePrice(Number(value));
  }

  function handleBrand(value: string) {
    setBrand(value);
  }

  const carPriceFormated = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(basePrice);

  return (
    <Container>
      <Title>Nome</Title>
      <Input
        placeholder="Nome do Carro"
        onChangeText={handleName}
        value={name}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Title>Ano</Title>
      <Input
        placeholder="Ano do Carro"
        onChangeText={handleYear}
        value={year.toString()}
        keyboardType="number-pad"
        autoCorrect={false}
      />

      <Title>Cor</Title>
      <Input
        placeholder="Cor do Carro"
        onChangeText={handleColor}
        value={color}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Title>Marca</Title>
      <Input
        placeholder="Marca do Carro"
        onChangeText={handleBrand}
        value={brand}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
      />

      <Title>Preço {carPriceFormated}</Title>
      <Input
        placeholder="Preço a ser vendido"
        onChangeText={handlePrice}
        value={basePrice.toString()}
        keyboardType="number-pad"
        autoCorrect={false}
      />

      <Title>Transmissão</Title>
      <TransmissionContainer>
        <TransmissionButton
          isActive={transmission === 1 ? true : false}
          onPress={() => setTransmission(1)}
        >
          <ButtonText isActive={transmission === 1 ? true : false}>
            Automático
          </ButtonText>
        </TransmissionButton>
        <TransmissionButton
          isActive={transmission === 2 ? true : false}
          onPress={() => setTransmission(2)}
        >
          <ButtonText isActive={transmission === 2 ? true : false}>
            Manual
          </ButtonText>
        </TransmissionButton>
      </TransmissionContainer>

      <Title>Tipo</Title>
      <TypeContainer>
        <Types>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            <TypeButtom
              key={1}
              isActive={type === 1 ? true : false}
              onPress={() => handleType(1)}
            >
              <ButtonText isActive={type === 1 ? true : false}>SUV</ButtonText>
            </TypeButtom>

            <TypeButtom
              key={2}
              isActive={type === 2 ? true : false}
              onPress={() => handleType(2)}
            >
              <ButtonText isActive={type === 2 ? true : false}>
                SEDAN
              </ButtonText>
            </TypeButtom>

            <TypeButtom
              key={3}
              isActive={type === 3 ? true : false}
              onPress={() => handleType(3)}
            >
              <ButtonText isActive={type === 3 ? true : false}>
                HATCH
              </ButtonText>
            </TypeButtom>

            <TypeButtom
              key={4}
              isActive={type === 4 ? true : false}
              onPress={() => handleType(4)}
            >
              <ButtonText isActive={type === 4 ? true : false}>
                CAMINHONETE
              </ButtonText>
            </TypeButtom>

            <TypeButtom
              key={5}
              isActive={type === 5 ? true : false}
              onPress={() => handleType(5)}
            >
              <ButtonText isActive={type === 5 ? true : false}>
                COMPACTO
              </ButtonText>
            </TypeButtom>
          </ScrollView>
        </Types>
      </TypeContainer>

      <Title>Combustível</Title>
      <CombContainer>
        <Combs>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            bounces={false}
          >
            <CombButtom
              key={1}
              isActive={fuel === 1 ? true : false}
              onPress={() => setFuel(1)}
            >
              <ButtonText isActive={fuel === 1 ? true : false}>
                Diesel
              </ButtonText>
            </CombButtom>

            <CombButtom
              key={2}
              isActive={fuel === 2 ? true : false}
              onPress={() => setFuel(2)}
            >
              <ButtonText isActive={fuel === 2 ? true : false}>
                Gasolina
              </ButtonText>
            </CombButtom>

            <CombButtom
              key={3}
              isActive={fuel === 3 ? true : false}
              onPress={() => setFuel(3)}
            >
              <ButtonText isActive={fuel === 3 ? true : false}>
                Etanol
              </ButtonText>
            </CombButtom>

            <CombButtom
              key={4}
              isActive={fuel === 4 ? true : false}
              onPress={() => setFuel(4)}
            >
              <ButtonText isActive={fuel === 4 ? true : false}>
                Eletrico
              </ButtonText>
            </CombButtom>

            <CombButtom
              key={5}
              isActive={fuel === 5 ? true : false}
              onPress={() => setFuel(5)}
            >
              <ButtonText isActive={fuel === 5 ? true : false}>
                Híbrido
              </ButtonText>
            </CombButtom>

            <CombButtom
              key={6}
              isActive={fuel === 6 ? true : false}
              onPress={() => setFuel(6)}
            >
              <ButtonText isActive={fuel === 6 ? true : false}>Flex</ButtonText>
            </CombButtom>
          </ScrollView>
        </Combs>
      </CombContainer>

      <ButtonContainer>
        <Button name="Adicionar" type="save" onPress={addNewCar} />
      </ButtonContainer>
    </Container>
  );
}
