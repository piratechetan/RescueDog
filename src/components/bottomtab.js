import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Screens/Home';
import { AntDesign,Feather } from '@expo/vector-icons'; 
import Settings from '../Screens/settings/index';
const Tab = createMaterialBottomTabNavigator();




const Bottomtab = () => {
  return (
     <Tab.Navigator
      activeColor='blue'
      inactiveColor='Grey'
      barStyle={{
        backgroundColor:'#fff'
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon:({color})=>(
            <AntDesign name="home" size={24} color={color} />
        )
      }}/>
      <Tab.Screen name='Settings' component={Settings} options={{
        tabBarIcon:({color})=>(
            <Feather name="settings" size={24} color={color} />
        )
      }}/>
      
    </Tab.Navigator>
  )
}

export default Bottomtab