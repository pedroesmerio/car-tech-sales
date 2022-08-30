import * as React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from "styled-components";

import Home from '@src/screens/Home';
import CarDetail from '@src/screens/CarDetail';
import CarRegister from "@src/screens/CarRegister";

const { Navigator, Screen } = createNativeStackNavigator();

//Todo: push props from the card to here and show on screen
export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator initialRouteName="home">
      <Screen
        name="home"
        options={{ headerShown: false }}
        component={Home}
      />

      <Screen
        name="carDetail"
        options={() => ({
          title: 'Detalhes do Carro',
          headerTintColor: theme.colors.offWhite,
          headerStyle: {
            backgroundColor: theme.colors.dark,
            height: 96,
          },
          headerRight: () => (
            //Todo: Delete car on Realm when onPress
            <FeatherIcon name='trash' onPress={() => console.log('apagou o carro')} />
          ),
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        })}
        component={CarDetail}
      />

      <Screen
        name="carRegister"
        options={{
          title: 'Carro',
          headerTintColor: theme.colors.offWhite,
          headerStyle: {
            backgroundColor: theme.colors.dark

          },
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
        component={CarRegister}
      />
    </Navigator>
  );
}

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacityProps } from "react-native";

export const FeatherIcon = styled(Icon) <TouchableOpacityProps>`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.red};
`;
