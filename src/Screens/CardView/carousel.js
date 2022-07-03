import { View, Text } from 'react-native'
import React from 'react'

const RenderItem = ({item, index}) => {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
}
const carousel = () => {
  return (
    <View>
      <Text>carousel</Text>
    </View>
  )
}

export default carousel