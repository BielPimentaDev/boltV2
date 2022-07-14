import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Txt } from '../../common/styles/styles'
import { AntDesign } from '@expo/vector-icons';
export default function SliderButton() {
  return (
   <Pressable style={styles.button}>
    <View style={styles.slideButton}>
    <AntDesign name="right" size={24} color="#00F9A5" />
    </View>
    <Text style={styles.textButton}>SLIDE TO STOP YOUR TRIP</Text>
   </Pressable>
  )
}


const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        backgroundColor: '#00F9A5',
        marginHorizontal: '5%',
        flexDirection: 'row',
         borderRadius: 15,
         height: 50,
         alignContent: 'center',
         alignItems: 'center'
        
    },
    textButton:{
        color: '#007965',
        fontFamily: 'montBoldItalic',
        fontSize: 12,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
        
    },
    slideButton:{
        height: '100%',
        width: `15%`,
        backgroundColor: '#07806F',
        justifyContent: 'center',
        alignItems: 'center',
         borderRadius: 12
    }
})