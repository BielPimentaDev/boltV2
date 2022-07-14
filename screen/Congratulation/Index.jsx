import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import React from 'react'
import { Txt, TxtBg } from '../../common/styles/styles';

const socialMedias =[
    { Telegram : [ <FontAwesome5 name="telegram-plane" size={28} color="#1DA1F2" />, "#1DA1F2"] },
    { Facebook :  [<FontAwesome name="facebook-f" size={28} color="#1877F2" />, "#1877F2"] },
    { Instagram : [<Entypo name="instagram-with-circle" size={32} color="#A50084" />, "#A50084"] },
    { Whatsapp :  [<FontAwesome5 name="whatsapp" size={28} color="#25D366" />, "#25D366"] },
    { Twitter : [ <FontAwesome name="twitter" size={28} color="#1DA1F2" />, "#1DA1F2" ]},
]

export default function Index() {
  return (
    <View style={styles.container}>
        <StatusBar/>
        <Image source={require('../../assets/imgs/logo2.png')} />

        <Text style={styles.title}>Congratulations</Text>
        <Text style={styles.subtitle}>YOU JUST DONE YOUR RACE AND  EARNED</Text>

        <View style={styles.drivePoints}>
            <View style={{flexDirection: 'row', justifyContent:'center',alignItems: 'flex-end'}}> 
                <Text style={styles.dolar}>$</Text>
                <Text style={styles.biggerNumber}>12</Text>
            </View>
            <Text style={styles.textPoints}>DRIVE POINTS</Text>

        </View>
        <Image source={require('../../assets/imgs/congratulations_image.png')} style={{height: '35%'}}/>

        <View style={{justifyContent:'flex-start'}}>
            <Text style={styles.contrastText}>Share this is</Text>
            <Text style={styles.subtitle}>If you like this article share it with your friends.</Text>
        </View>

      <View style={styles.socialContainer}>
        {socialMedias.map(item=>{
            return(
                    <View key={Object.keys(item)[0]} style={styles.socialMediaView}>
                        <View  style={styles.socialCircle}>
                            {Object.values(item)[0][0]}
                            </View>
                                        <Text style={{fontFamily: 'mont', color: Object.values(item)[0][1], fontSize:8}}  key={Object.keys(item)}>
                        {Object.keys(item)[0]}
                                        </Text>
                    </View>
            )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#021C19',
        flex: 1,
        width:'100%',
        alignItems:'center',
        alignContent:'center',
        padding: 10
      
       
    },
    title:{
        color: 'white',
        fontFamily: 'montBoldItalic',
        fontSize:30
    },
    subtitle:{
        color: 'white',
        fontFamily: 'mont',
        fontSize:12,
        marginVertical:10,
        
    },
    biggerNumber:{
        color: '#02FFE3',
        fontSize:70,
        fontFamily: 'montExtraBold',
        
    },
    dolar:{
        color: '#02FFE3',
        marginBottom:20,
        fontFamily:'montBold',
        fontSize:18
    },

    textPoints:{
        color: '#02FFE3',
        fontFamily:'montBold'
    },
    socialContainer:{flexDirection: 'row', justifyContent:'space-around', alignItems:'center'},
    socialMediaView:{
        marginHorizontal:10,
      
    },
    socialCircle:{
        backgroundColor: '#05292F',
        borderRadius: 100,
        padding:10,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
   
    },
    socialTxt:{
        font: 'mont',
        fontSize: 14
    },
    contrastText:{
        fontSize:24,
        fontFamily: 'montBold',
        color:'#02FFE3'
    },
});