import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Register } from '@screens/Register'
import { List } from '@screens/List'
import { useTheme } from 'styled-components/native'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${theme.COLORS.ORANGE}`,
        tabBarStyle: {
          backgroundColor: `${theme.COLORS.GRAY_600}`,
          borderTopWidth: 0,
          paddingBottom: 3,
        },
      }}
    >
      <Screen
        name="Registrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Listar"
        component={List}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  )
}
