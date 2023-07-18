import React from "react";

import { RealmProvider } from "@src/database/realm";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components/native";
import GlobalTheme from "@src/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Routes } from "@src/routes";

export default function App() {
  return (
    <RealmProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={GlobalTheme}>
          <StatusBar style="light" />
          <Routes />
        </ThemeProvider>
      </GestureHandlerRootView>
    </RealmProvider>
  );
}
