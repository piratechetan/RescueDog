import { View, Text, Platform } from 'react-native'
import React from 'react'
import WebStyle from './WebStyle'
import MobStyle from './MobStyle'

const DetailScreen = ({navigation}) => {
  return (
    <View>
    {Platform.OS === 'web' ?
    <WebStyle/> : <MobStyle/> }
    </View>
  )
}

export default DetailScreen