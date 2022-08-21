import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';

import { StatusBar } from 'expo-status-bar';
import Home from '@src/screens/Home';

import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={GlobalTheme}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </ThemeProvider>
  )
}
