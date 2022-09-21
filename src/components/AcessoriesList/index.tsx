import { useObject, useRealm } from "@src/database/realm";
import React, { useCallback } from "react";
import { Alert } from "react-native";

import {
  ItemContainer,
  Title,
  FeatherIcon,
  NameView,
  PriceView,
} from "./styles";

type AcessorieProps = {
  acessId: string;
  acessorieName: string;
  price: number;
};

export function AcessorieItem({
  acessId,
  acessorieName,
  price,
}: AcessorieProps) {
  const realm = useRealm();
  const carData = useObject("AcessoriesTable", acessId);

  const removeAcessorie = useCallback(async () => {
    try {
      realm.write(() => {
        realm.delete(
          realm.objects("AcessoriesTable").filtered(`IdMobile = '${acessId}'`)
        );
      });
      Alert.alert("Sucesso", "Acessório REMOVIDO com sucesso!");
    } catch {
      Alert.alert("Falhou", "não foi possível REMOVER o acessório!");
    }
  }, [acessId]);

  function handleAcessorieRemove() {
    Alert.alert("Aviso", "O acessório será REMOVIDO!", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        onPress: () => removeAcessorie(),
      },
    ]);
  }

  return (
    <ItemContainer>
      <NameView>
        <FeatherIcon name="trash" onPress={handleAcessorieRemove} />
        <Title align="left" color="offWhite">
          {acessorieName}
        </Title>
      </NameView>
      <PriceView>
        <Title align="left" color="">
          R$ {price},00
        </Title>
      </PriceView>
    </ItemContainer>
  );
}
