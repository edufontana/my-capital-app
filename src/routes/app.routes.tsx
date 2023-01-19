import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Register } from '../screens/Register'
import { List } from '../screens/List'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff6b06',
      }}
    >
      <Screen name="Register" component={Register} />
      <Screen name="List" component={List} />
    </Navigator>
  )
}
