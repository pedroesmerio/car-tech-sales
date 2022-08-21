import React from 'react';

import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';

import { StatusBar } from 'expo-status-bar';
import Home from '@src/screens/Home';

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
