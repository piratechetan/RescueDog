import {Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Image,Text,View } from 'native-base'
const {width,height} = Dimensions.get('window')
const MobStyle = () => {
    const route = useRoute();
    const {detail} = route.params;
  return (
    <View>
    <Image source={{uri:detail.img}} alt="Alternate Text" size='full' style={{width:'100%',height:height*0.5,borderBottomLeftRadius:15,borderBottomRightRadius:15}}/>
      <View style={{margin:width*0.05}}>
            <Text style={{fontSize:width*0.06,color:'blue'}}>{detail.name}</Text>
        </View>
        <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={styles.detailscont}>
                    <Text>Age</Text>
                </View>
                <View style={styles.detailscont}>
                    <Text>Breed</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <View style={styles.detailscont}>
                    <Text>Gender</Text>
                </View>
                <View style={styles.detailscont}>
                    <Text>Weight</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

export const styles = StyleSheet.create({
   detailscont:{
    elevation:1,
    borderWidth:0.1,
    borderColor:'rgba(0,0,0,0.1)',
    width:width/2
}
})
export default MobStyle