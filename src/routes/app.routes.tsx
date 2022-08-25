import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@src/screens/Home';
import CarDetail from '@src/screens/CarDetail';
import CarRegister from "@src/screens/CarRegister";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="carDetail"
        options={{ headerShown: false }}
        component={CarDetail}
      />

      <Screen
        name="home"
        options={{ headerShown: false }}
        component={Home}
      />

      <Screen
        name="carRegister"
        options={{ headerShown: false }}
        component={CarRegister}
      />
    </Navigator>
  );
}
