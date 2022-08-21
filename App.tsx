import React from 'react';

import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';

import { StatusBar } from 'expo-status-bar';
import Dashboard from '@src/screens/Dashboard';

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
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
      <Dashboard />
    </ThemeProvider>
  )
}
