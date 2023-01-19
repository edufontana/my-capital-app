import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppRoutes } from '@routes/app.routes'
import theme from '@theme/index'
import { TransactionsProvider } from './src/contexts/TransactionsContext'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <TransactionsProvider>
            <AppRoutes />
          </TransactionsProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
