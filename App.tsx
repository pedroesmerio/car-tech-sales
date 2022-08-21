import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';

import Dashboard from '@src/screens/Dashboard';

import GlobalTheme from '@src/global/styles/theme';

export default function App() {
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
