import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { Routes } from '@src/routes';

import { useFonts } from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [canShow, setCanShow] = useState(false);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (fontsLoaded === false) {
    return null;
  }

  if (canShow === false) {
    setTimeout(() => {
      setCanShow(true);
    }, 3000);

    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={GlobalTheme}>
        <StatusBar style="inverted" />
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

