import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Txt } from '../../common/styles/styles'
import { AntDesign } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'
export default function SliderButton() {
  return (
      <Pressable  >
           
            <LinearGradient colors={['#00F786','#00FBBB',]} style={styles.button} end={{x:1.0, y:0.8}} >

    {/* <View > */}

    <LinearGradient colors={['#077468','#04C390',]}  end={{x:1.0, y:0.8}}  style={styles.slideButton}>
    <AntDesign name="right" size={24} color="#00F9A5" />
    </LinearGradient>

    {/* </View> */}
    <Text style={styles.textButton}>SLIDE TO STOP YOUR TRIP</Text>
    </LinearGradient>
 
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
        height: '105%',
        width: `18%`,
        backgroundColor: '#07806F',
        justifyContent: 'center',
        alignItems: 'center',
         borderRadius: 12,
        //  borderWidth:1,
        //  borderColor:'black',
       
    }
})