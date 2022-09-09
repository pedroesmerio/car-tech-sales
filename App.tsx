import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Routes } from '@src/routes';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={GlobalTheme}>
        <StatusBar style="inverted" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

