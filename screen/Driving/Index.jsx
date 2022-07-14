import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { MyText } from './style'
import { StatusBar } from 'react-native-web'
import Speedometer from './Speedometer'
import BatteryCount from './BatteryCount'
import Status from './Status'
import SliderButton from './SliderButton'
import Map from './Map'

export default function Driving() {
return (
  <View style={styles.container}>
    <Image source={require('../../assets/imgs/logo2.png')}/>
    <Image source={require('../../assets/imgs/map.png')} style={{height:'20%', marginVertical:20}}/>
    <View style={styles.box}>
    {/* <Speedometer/> */}
    <BatteryCount/>
    <Status/>
    <SliderButton/>
    </View>
    <Map/>
  </View>
)

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#031E1C',
    paddingTop:20,
    alignContent:'center',
    alignItems:'center',
   
    
  },
  
  box:{
    flex:1,
    width:'100%',
    backgroundColor:'#092F2A',
    borderRadius:40,
    padding: 10
  }
})