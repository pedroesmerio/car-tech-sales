import * as React from "react";
import { useTheme } from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

function shouldHeaderBeShown(routeName: string) {
  switch (routeName) {
    case "Home":
      return false;
    case "CarRegister":
      return true;
    case "CarDetail":
      return true;
    default:
      return true;
  }
}

import * as Routes from "./routes";
import { useState } from "react";
import { Header } from "@src/components/Header";

function createScreens(components: any) {
  return (
    <>
      {Object.entries(components).map(([key, value]) => (
        <Screen key={key} name={key} component={value as any} />
      ))}
    </>
  );
}

export function AppRoutes() {
  const theme = useTheme();
  const [initialRoute, setInitialRoute] = useState<string>("Home");

  return (
    <Navigator
      initialRouteName={initialRoute}
      screenOptions={({ route }) => ({
        contentStyle: { backgroundColor: theme.colors.background },
        header: (props) => <Header {...props} />,
        headerShown: shouldHeaderBeShown(route?.name),
        headerBackTitleVisible: false,
        gestureEnabled: false,
      })}
    >
      {createScreens(Routes)}
    </Navigator>
  );
}
