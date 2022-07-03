import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../Screens/Home';
import { AntDesign,Feather,FontAwesome5,Entypo } from '@expo/vector-icons'; 
import Settings from '../Screens/settings/index';
import Rescue from '../Screens/Rescue/Rescue';
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
            <Entypo name="home" size={24} color={color} />
        )
      }}/>
      <Tab.Screen name='Rescue' component={Rescue} options={{
        tabBarIcon:({color})=>(
          <FontAwesome5 name="hands-helping" size={24} color={color} />
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