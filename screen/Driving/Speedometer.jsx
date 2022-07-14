import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Speeder } from './style';
import { Txt, TxtBg, TxtLght } from '../../common/styles/styles';

export default function Speedometer() {
  return (
    <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', flex:1, marginBottom:20}}>
     
      
          <View style={styles.box}>
            <View style={styles.kmNumber}>
              <TxtBg>125</TxtBg>
              <TxtLght>km/hr</TxtLght>
            </View>
            
          <View style={styles.speeder}>
            <View style={{backgroundColor: '#02FFE3', width: '50%', height:'100%'}}/>
          </View>
        </View>

          </View>
   
  )
}
const styles = StyleSheet.create({
    box:{
    
       
        width: 200,
        height:100,
        // backgroundColor:'red',
        borderTopStartRadius: 500,
        borderTopEndRadius: 500,
        // justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'hidden'
    },
    kmNumber:{
      marginTop:'auto',
      backgroundColor:'#031E1C',
      zIndex:1,
      width:'70%',
      height:'70%',
      // overflow:'hidden',
      borderTopStartRadius: 500,
      borderTopEndRadius: 500,
      justifyContent:'center',
      alignItems: 'center',
     
      
    },
    speeder:{
    
      width:'100%',
      height: 5,
      transform: [{rotate: '30deg'}]
      
      
    }

});