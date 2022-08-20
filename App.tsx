import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Dashboard from '@src/screens/Dashboard';

export default function App() {
  return (
    <>
      <StatusBar
        style="inverted"
        backgroundColor="transparent"
        translucent
      />
      <Dashboard />
    </>
  )
}
