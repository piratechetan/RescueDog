import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Bottomtab from './bottomtab';
import DetailScreen from '../Screens/CardView/DetailScreen';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="HomeScreen" component={Bottomtab}/>
      <Stack.Screen name="Details" component={DetailScreen} options={{
        headerShown:true
      }}/>
    </Stack.Navigator>
  )
}

export default StackScreen