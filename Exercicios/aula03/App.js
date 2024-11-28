import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigation from './src/navigation/AppNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

export default App