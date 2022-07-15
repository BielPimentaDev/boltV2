import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Txt, TxtBg } from '../../common/styles/styles'

export default function BatteryCount() {
  return (
    <View style={styles.container}>
      <Txt>Battery</Txt>
      <View style={styles.squareContainer}>
          
            <View style={styles.square}/>
            <View style={styles.square}/>
            <View style={styles.square}/>
            <View style={styles.squareLess}/>
      </View>
        
      
      <TxtBg>60%</TxtBg>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
    square:{
        width: '25%',
        height: 10,
        borderRadius:4,
        backgroundColor: '#02FFE3',
        margin:15,
        shadowColor: '#02FFE3',
        shadowOffset: {width:20, height:30},
         shadowRadius: 16,
         elevation: 16,
         shadowOpacity: 0.8
        
       
    },
    squareLess:{
        width: '25%',
        height: 10,
        borderRadius:4,
        backgroundColor: '#02FFE3',
        margin:15,
        
        opacity: 0.5
       
    },
    squareContainer:{
        flexDirection: 'row',
        width: '35%',
       justifyContent:'space-evenly'
    }

});