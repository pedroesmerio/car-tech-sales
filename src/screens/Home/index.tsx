import React, { useMemo, useState } from "react";

import { HeaderHome } from "@src/components/Header";

import {
  AddCarButtom,
  Container,
  InputContainer,
  NoCarContainer,
  Title,
} from "./styles";

import { Button } from "@src/components/Button";
import { Card } from "@src/components/Card";
import { Input } from "@src/components/Form/Input";
import { FontistoIcon } from "@src/components/Icons/styles";
import { useQuery } from "@src/database/realm";
import { RootStackScreenProps } from "@src/routes/types";
import { FlatList } from "react-native";

export type ResponseType = {
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
  Accessories: AccessoriesSchema[];
};

type AccessoriesSchema = {
  IdMobile: string;
  Accessorie: number;
  Price: number;
};

export default function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [input, setInput] = useState("");

  const response = useQuery<ResponseType>("CarTable");
  const carList = useMemo(
    () => response.sorted("Date", true).filtered(`Name CONTAINS '${input}'`),
    [response]
  );

  // #region [HANDLERS]
  function handleFilter(value: string) {
    setInput(value);
  }

  function handleNavigateToDetail(item: string) {
    navigation.navigate("CarDetail", { IdMobile: `${item}` });
  }

  function handleNavigateToRegister() {
    navigation.navigate("CarRegister");
  }
  // #endregion [HANDLERS]

  return (
    <>
      <HeaderHome totalCars={carList.length} />
      <InputContainer>
        <Input
          placeholder="Nome do Carro"
          onChangeText={handleFilter}
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}
        />
      </InputContainer>

      <Container>
        <FlatList
          data={carList}
          keyExtractor={(item) => item.IdMobile}
          renderItem={({ item }) => (
            <Card
              key={item.IdMobile}
              name={item.Name}
              brand={item.Brand}
              year={item.Year}
              transmission={item.Transmission}
              fuel={item.Fuel}
              type={item.Model}
              basePrice={item.BasePrice}
              imgUrl={item.ImgUrl}
              onPress={() => handleNavigateToDetail(item.IdMobile)}
            />
          )}
          style={{ flex: 1, width: "100%" }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NoCarContainer>
              <Title>Nenhum carro encontrado</Title>
              <Button
                name="ADICIONAR"
                type="add"
                onPress={() => navigation.navigate("CarRegister")}
              />
            </NoCarContainer>
          )}
        />
        <AddCarButtom onPress={handleNavigateToRegister}>
          <FontistoIcon name="plus-a" color="white" size={44} />
        </AddCarButtom>
      </Container>
    </>
  );
}
