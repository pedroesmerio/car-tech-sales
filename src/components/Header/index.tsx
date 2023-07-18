import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useTheme } from "styled-components";

import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import {
  ContainerBackIcon,
  ContainerHeader,
  ContainerTitle,
  HeaderHomeContainer,
  Logo,
  Title,
  TotalText,
} from "./styles";

export function HeaderHome(totalCars) {
  const cars = Number(Object.values(totalCars));

  return (
    <HeaderHomeContainer>
      <Logo source={require("/assets/Logo.png")} />
      <TotalText>Total de {cars} carros</TotalText>
    </HeaderHomeContainer>
  );
}

export function Header({ navigation, route }: NativeStackHeaderProps) {
  const theme = useTheme();

  const handleNavigationGoBack = () => {
    navigation.goBack();
  };

  return (
    <ContainerHeader>
      <ContainerTitle>
        <ContainerBackIcon>
          <FeatherIcon
            name="chevron-left"
            color={theme.colors.white}
            size={36}
            onPress={handleNavigationGoBack}
          />
        </ContainerBackIcon>
        <Title color={theme.colors.white}>{route.name}</Title>
      </ContainerTitle>
    </ContainerHeader>
  );
}
