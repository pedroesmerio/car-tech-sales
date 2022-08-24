import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import GlobalTheme from '@src/global/styles/theme';

import { StatusBar } from 'expo-status-bar';
import Home from '@src/screens/Home';
import CarDetail from '@src/screens/CarDetail';

import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        });
      }
      catch {
        // handle error
      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, [])

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayout} style={styles.container}>
      <ThemeProvider theme={GlobalTheme}>
        <StatusBar style="inverted" />
        <Home />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
