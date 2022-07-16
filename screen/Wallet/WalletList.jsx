import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Txt } from '../../common/styles/styles'

const walletList =[
    {
        title: 'Help and support',
        subtitle: 'How we work & use your data',
        icon: <Image source={require('../../assets/imgs/Support.png')} style={{width:24, height:24, marginHorizontal:20}}/>
    },
    {
        title: 'Privacy Policy',
        subtitle: 'How we work & use your data',
        icon: <Image source={require('../../assets/imgs/PrivatePolicy.png')} style={{width:24, height:24, marginHorizontal:20}}/>
    },
    {
        title: 'Rate Us',
        subtitle: 'Tell us what we think',
        icon: <Image source={require('../../assets/imgs/UserRating.png')} style={{width:24, height:24, marginHorizontal:20}}/>
    },
]

export default function WalletList() {
  return (
    <View style={styles.list}>
      {
        walletList.map(item=>{
            return(
                <View key={item.title} style={styles.item}>
                    {item.icon}
                    <Pressable>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </Pressable>
                </View>
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        marginVertical:15,
        justifyContent:'space-around',
        flex:1
    
    },
    title:{
        fontFamily: 'mont',
        fontSize: 14,
        color: 'white'
    },
    subtitle:{
        fontFamily: 'mont',
        fontSize: 14,
        color: '#9AA4A3'
    },
     item:{
        flexDirection: 'row',
        borderBottomWidth:1,
        borderColor: '#0F2926',
        marginVertical:20,
        paddingBottom:20
     }
});