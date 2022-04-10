import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Anton_400Regular } from '@expo-google-fonts/anton'
import AppLoading from 'expo-app-loading'

import AppRoutes from './src/routes/App.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Anton_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <AppRoutes />
    </NavigationContainer>
  )
}