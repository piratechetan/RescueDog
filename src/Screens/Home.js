import { View, Text, StyleSheet, FlatList, Image, Dimensions, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { VStack,Center, Container,Card } from 'native-base';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { DogsList } from '../assets/dogslist';

const {height,width} = Dimensions.get("window")
const Columnflex = Platform.OS ==='web' ? 4 : 2
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
     <VStack>
        <View style={styles.header}>
            <View style={styles.locationView}>
            <Ionicons name="location-outline" size={24} color="black" />
            <View style={{marginHorizontal:10}}>
                <Text style={styles.addresstitle}>location</Text>
                <Text style={styles.address}>Katamnallur,bengluru</Text>
            </View>
            </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
     </VStack>
     <FlatList
        data={DogsList}
        numColumns={Platform.OS =='web' ? 4 : 2}
        // ListFooterComponent={()=>{
        //     return(
        //         <View style={{paddingBottom:'10%'}}></View>
        //     )
        // }}
        ListHeaderComponent={()=>{
            return(
                <View style={Platform.OS!='web'? { margin:15,}:{}}>
                    <View style={{alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'600',color:'blue'}}>Don't Buy !</Text>
        <Text style={{fontSize:18,fontWeight:'600',color:'yellow',textAlign:'center'}}>Adopt Them</Text>
     </View>
     <View style={{alignItems:'center'}}>
        <Text style={{fontSize:17,fontWeight:'500',color:'rgba(0,0,0,0.3)',textAlign:'center'}}>To the people out there who buy dogs or cats rather than adopting."Dost khareede nhi banaye jate hai"</Text>
     </View>
                </View>
            )
        }}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>{
            return(
             <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.navigate('Details',{detail:item})} style={{flex:1/Columnflex,marginVertical:10,marginHorizontal:5,elevation:1,borderWidth:0.1,borderColor:'rgba(0,0,0,0.3)',borderBottomLeftRadius:10,borderBottomEndRadius:10,borderTopEndRadius:10,borderTopStartRadius:10}}>
            <View >
             <Image source={{uri:item.img}} style={{width:'100%',height:Platform.OS=='web' ? 300 :150,resizeMode:'cover',borderTopLeftRadius:10,borderTopRightRadius:10}}/>
             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
             <View style={{margin:15,padding:0}}>
             <Text style={{fontSize:15,fontWeight:'600'}}>{item.name}</Text>
             <Text style={{fontSize:12,fontWeight:'400',color:'rgba(0,0,0,0.5)'}}>{item.Weight}</Text>
             </View>
             <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
             <AntDesign name="heart" size={20} color="black" style={{marginRight:10}}/>
             <AntDesign name="like2" size={20} color="black" style={{marginRight:10}}/>
             <AntDesign name="dislike2" size={20} color="black" style={{marginRight:10}}/>
             </View>
             </View>
             </View>
             </TouchableOpacity>
            )
        }}
        />
    </View>
  )
}

export const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#fff'
  },
  header:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:15,
    alignItems:'center',
},
locationView:{
    flexDirection:'row',
    alignItems:'center'
},
addresstitle:{
    fontSize:12,
    fontWeight:'400',
    color:'rgba(0,0,0,0.3)'
},
address:{
    fontSize:14,
    fontWeight:'600',
    color:'blue'

}

})

export default Home