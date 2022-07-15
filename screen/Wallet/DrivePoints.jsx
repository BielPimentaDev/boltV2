import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import {LinearGradient} from 'expo-linear-gradient'

export default function DrivePoints() {
  return (
    <View>
        <LinearGradient style={styles.driveContainer} colors={['#0D7311','#00FFFB']} end={{x:0.8, y:1.0}}>

      <View style={styles.titleBox}>
          <Text style={styles.title}>DrivePoints</Text>
          <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={styles.numberBox}>
        <Text style={styles.number}>$246,084.21</Text>
      </View>

        </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
    driveContainer:{
       
        marginHorizontal:20,
        padding:10,
        borderRadius:15,
        marginVertical:10
        
    },
    titleBox:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        marginBottom:10
        
    },
    title:{
        fontFamily: 'montBoldItalic',
        color: '#094340',
        fontSize: 24,
        // marginLeft: 20
    },
    numberBox:{
        backgroundColor: '#094340',
        marginHorizontal:40,
        borderRadius:11
    },
    number:{
        color: 'white',
        fontFamily: 'mont',
        fontSize: 24,
        paddingHorizontal:10,
        paddingVertical:5
    }
});