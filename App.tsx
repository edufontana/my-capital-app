import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppRoutes } from '@routes/app.routes'
import theme from '@theme/index'

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
          <AppRoutes />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
