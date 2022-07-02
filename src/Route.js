import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Bottomtab from './components/bottomtab'
import StackScreen from './components/Stack'
const Route = () => {
  return (
   <NavigationContainer>
    <StackScreen/>
   </NavigationContainer>
  )
}

export default Route