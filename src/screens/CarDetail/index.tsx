import React, { useCallback, useMemo, useRef, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList, ScrollView } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import uuid from "react-native-uuid";

import { AcessorieItem } from "@src/components/AcessoriesList";
import { Button, EditButton } from "@src/components/Button";
import { SpecificationCard } from "@src/components/Card/SpecificationCard";
import { Input } from "@src/components/Form/Input";

import {
  Container,
  ImageContainer,
  CarImage,
  BrandName,
  CarName,
  Title,
  SpecificationContainer,
  PriceContainer,
  AcessoriesContainer,
  PriceTitle,
  FooterContainer,
  Cards,
  AcessItems,
  NoAcessoriesContainer,
  TitleContainer,
  ModalContainer,
  ModalPriceContainer,
  AcessorieTypeContainer,
  Acess,
  AddAcessButtom,
  ButtonText,
  TrashIcon,
} from "./styles";

import * as Yup from "yup";

const schemaValidation = Yup.object().shape({
  acessorieType: Yup.number()
    .required("Você deve selecionar um tipo abaixo de Novo acessório")
    .integer(),
  acessoriePrice: Yup.number()
    .required("Você deve inserir um preço para o acessório")
    .integer(),
});

import { useRealm, useObject } from "@src/database/realm";
import { FeatherIcon } from "@src/components/Icons/styles";

export type ResponseProps = {
  IdMobile: string;
  Name: string;
  Year: number;
  BasePrice: number;
  Transmission: number;
  Brand: string;
  Fuel: number;
  Model: number;
  Color: string;
  ImgUrl: string;
  Date: Date;
  Acessories: AcessProps[];
};

type AcessProps = {
  IdMobile: string;
  Acessorie: number;
  Price: number;
  Date: Date;
};

export default function CarDetail({ route }) {
  const navigation = useNavigation();
  const carId = route.params.carId;

  // Using useObject
  const carData = useObject<ResponseProps>("CarTable", carId);

  const acessData = carData.Acessories;

  const [acessorieType, setAcessorieType] = useState<number>(0);
  const [acessoriePrice, setAcessoriePrice] = useState<number>(null);

  const acessPriceFormated = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(acessoriePrice);

  function handleAcessoriePrice(moneyValue: number) {
    const money = Number(moneyValue);
    setAcessoriePrice(money);
  }

  //Calculate and sum the FINAL PRICE including the acessories
  const acessPrices = acessData.map((item) => item.Price);
  const sumAcessPrices = acessPrices.reduce(
    (sumAcessPrices, prices) => sumAcessPrices + prices,
    0
  );
  const finalPrice = carData.BasePrice + sumAcessPrices;

  const carPriceFormated = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(finalPrice);

  // BottomSheet variables
  const bottomSheetRef = useRef<BottomSheet>(null);
  // Open/Close state
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // variables
  const snapPoints = [1, "40%"];
  // callbacks
  const handleCloseSnap = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
    setIsSheetOpen(false);
  }, []);
  const handleOpenSnap = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
    setIsSheetOpen(true);
  }, []);

  const realm = useRealm();

  const addNewAcessorie = useCallback(async () => {
    try {
      await schemaValidation.validate({
        carData,
        acessorieType,
        acessoriePrice,
      });

      const newAcess = {
        IdMobile: uuid.v4().toString(),
        Acessorie: acessorieType,
        Price: acessoriePrice,
        Date: new Date(),
      };

      const carDataUpdated = {
        Acessories: [...carData.Acessories, { ...newAcess }],
        BasePrice: carData.BasePrice,
        Brand: carData.Brand,
        Color: carData.Color,
        Date: carData.Date,
        Fuel: carData.Fuel,
        IdMobile: carData.IdMobile,
        ImgUrl: carData.ImgUrl,
        Model: carData.Model,
        Name: carData.Name,
        Transmission: carData.Transmission,
        Year: carData.Year,
      };

      realm.write(() => {
        realm.create("CarTable", carDataUpdated, Realm.UpdateMode.Modified);
      });

      setAcessoriePrice(0);
      Alert.alert("Sucesso", "Acessório adicionado com sucesso!");
      handleCloseSnap();
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Erro", `${error}`);
      } else Alert.alert("Erro", "Não foi possível adicionar acessório!");
    }
  }, [acessoriePrice, acessorieType, carData]);

  const removeCar = useCallback(async () => {
    try {
      realm.write(() => {
        const deleted = realm.delete(
          realm.objects("CarTable").filtered(`IdMobile = '${carId}'`)
        );
        console.log(deleted);
        navigation.navigate("home");
      });
      Alert.alert("Sucesso", "Carro REMOVIDO com sucesso!");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "não foi possível REMOVER o carro!");
    }
  }, [carId]);

  function handleRemoveCar() {
    Alert.alert("Aviso", "O carro será REMOVIDO!", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        onPress: () => removeCar(),
      },
    ]);
  }

  function getAcessName(index: number) {
    switch (index) {
      case 1:
        return "Ar. Cond";
      case 2:
        return "Som";
      case 3:
        return "GPS";
      case 4:
        return "Multimedia";
      case 5:
        return "Locker";
      case 6:
        return "Alarm";
      default:
        break;
    }
  }

  function getTransName(index: number) {
    switch (index) {
      case 1:
        return "Automático";
      case 2:
        return "Manual";
      default:
        break;
    }
  }

  function getTypeName(index: number) {
    switch (index) {
      case 1:
        return "SUV";
      case 2:
        return "Sedan";
      case 3:
        return "Hatch";
      case 4:
        return "Caminhonete";
      case 5:
        return "Compacto";
      default:
        break;
    }
  }

  function getFuelName(index: number) {
    switch (index) {
      case 1:
        return "Diesel";
      case 2:
        return "Gasolina";
      case 3:
        return "Etanol";
      case 4:
        return "Elétrico";
      case 5:
        return "Híbrido";
      case 6:
        return "Flex";
      default:
        break;
    }
  }

  function handleAcessType(index: number) {
    switch (index) {
      case 0:
        setAcessorieType(index);
        break;
      case 1:
        setAcessorieType(index);
        break;
      case 2:
        setAcessorieType(index);
        break;
      case 3:
        setAcessorieType(index);
        break;
      case 4:
        setAcessorieType(index);
        break;
      case 5:
        setAcessorieType(index);
        break;
      case 6:
        setAcessorieType(index);
        break;
      default:
        break;
    }
  }

  function handleIsAcessorieActive(isActiveValue: number) {
    if (acessorieType === isActiveValue) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container>
      <TrashIcon>
        <FeatherIcon
          name="trash"
          color="red"
          size={36}
          onPress={handleRemoveCar}
        />
      </TrashIcon>
      <ImageContainer>
        <CarImage
          source={{
            uri: `https://raw.githubusercontent.com/pedroesmerio/car-tech-sales/main/src/assets/cars/${carData.ImgUrl}`,
          }}
          resizeMode="contain"
        />
        <BrandName>{carData.Brand}</BrandName>
        <CarName align="center">
          {carData.Name} - {carData.Year}
        </CarName>
      </ImageContainer>

      <SpecificationContainer>
        <Title align="left" color="default">
          Especificações
        </Title>
        <Cards>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={false}
            horizontal={true}
          >
            <SpecificationCard
              name="Cor"
              iconName="format-color-fill"
              value={carData.Color}
            />
            <SpecificationCard
              name="Combustível"
              iconName="fuel"
              value={getFuelName(carData.Fuel)}
            />
            <SpecificationCard
              name="Tipo"
              iconName="car"
              value={getTypeName(carData.Model)}
            />
            <SpecificationCard
              name="Transmissão"
              iconName="cog"
              value={getTransName(carData.Transmission)}
            />
          </ScrollView>
        </Cards>
      </SpecificationContainer>

      <AcessoriesContainer>
        <TitleContainer>
          <Title align="left" color="default">
            Acessórios
          </Title>
          <Title align="right" color="blue" onPress={handleOpenSnap}>
            Adicionar +
          </Title>
        </TitleContainer>

        <FlatList
          data={acessData}
          keyExtractor={(item) => item.IdMobile}
          renderItem={({ item }) => (
            <AcessItems>
              <AcessorieItem
                acessId={item.IdMobile}
                acessorieName={getAcessName(item.Acessorie)}
                price={item.Price}
              />
            </AcessItems>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoAcessoriesContainer>
              <Title align="center" color="default" size={20}>
                Nenhum acessório encontrado
              </Title>
            </NoAcessoriesContainer>
          )}
        />
      </AcessoriesContainer>

      <FooterContainer>
        <PriceContainer>
          <Title align="left" color="default" size={30}>
            {carPriceFormated}
          </Title>
          <PriceTitle align="left">Preço</PriceTitle>
        </PriceContainer>
        <EditButton
          name="EDITAR"
          type="edit"
          onPress={() =>
            navigation.navigate("carRegister", { Id: `${carData.IdMobile}` })
          }
        />
      </FooterContainer>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onClose={() => setIsSheetOpen(false)}
        enablePanDownToClose
      >
        <ModalContainer>
          <Title align="left" color="dark">
            Novo acessório
          </Title>

          <AcessorieTypeContainer>
            <Acess>
              <BottomSheetScrollView horizontal={true}>
                <AddAcessButtom
                  key={1}
                  isActive={handleIsAcessorieActive(1)}
                  onPress={() => handleAcessType(1)}
                >
                  <ButtonText isActive={acessorieType === 1 ? true : false}>
                    AR Cond.
                  </ButtonText>
                </AddAcessButtom>

                <AddAcessButtom
                  key={2}
                  isActive={acessorieType === 2 ? true : false}
                  onPress={() => handleAcessType(2)}
                >
                  <ButtonText isActive={acessorieType === 2 ? true : false}>
                    SOM
                  </ButtonText>
                </AddAcessButtom>

                <AddAcessButtom
                  key={3}
                  isActive={acessorieType === 3 ? true : false}
                  onPress={() => handleAcessType(3)}
                >
                  <ButtonText isActive={acessorieType === 3 ? true : false}>
                    GPS
                  </ButtonText>
                </AddAcessButtom>

                <AddAcessButtom
                  key={4}
                  isActive={acessorieType === 4 ? true : false}
                  onPress={() => handleAcessType(4)}
                >
                  <ButtonText isActive={acessorieType === 4 ? true : false}>
                    MULT.
                  </ButtonText>
                </AddAcessButtom>

                <AddAcessButtom
                  key={5}
                  isActive={acessorieType === 5 ? true : false}
                  onPress={() => handleAcessType(5)}
                >
                  <ButtonText isActive={acessorieType === 5 ? true : false}>
                    LOCKER
                  </ButtonText>
                </AddAcessButtom>

                <AddAcessButtom
                  key={6}
                  isActive={acessorieType === 6 ? true : false}
                  onPress={() => handleAcessType(6)}
                >
                  <ButtonText isActive={acessorieType === 6 ? true : false}>
                    ALARM
                  </ButtonText>
                </AddAcessButtom>
              </BottomSheetScrollView>
            </Acess>
          </AcessorieTypeContainer>

          <Title align="left" color="dark">
            Preço {acessPriceFormated}
          </Title>

          <Input
            placeholder="Insira o valor do acessório"
            onChangeText={handleAcessoriePrice}
            value={acessoriePrice}
            keyboardType="number-pad"
            autoCorrect={false}
          />
          <ModalPriceContainer>
            <Button name="Adicionar" type="save" onPress={addNewAcessorie} />
          </ModalPriceContainer>
        </ModalContainer>
      </BottomSheet>
    </Container>
  );
}
