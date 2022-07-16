import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import { StyleSheetManager } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import FlatlistNFT from './FlatlistNFT';

export default function Index() {
  return (
    <View style={styles.container}>
        <StatusBar/>

        <Image source={require("../../assets/imgs/logo2.png")} style={{width:150, height:40}}/>
      <View style={styles.searchContainer}>
          <TextInput placeholder='Buscar...' style={styles.search}/>
          <View style={styles.icon}>
              <FontAwesome  name="search" size={22} color="#474A5B" />
          </View>
      </View>
      <ScrollView style={{}}>
          <FlatlistNFT/>
          <FlatlistNFT/>
          <FlatlistNFT/>
     
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor: '#021C19',
        alignItems: 'center',
        padding: 10
        
    },
    searchContainer:{
        position: 'relative',
        width: '100%',
        marginVertical: 15
    },
    icon:{
        position: 'absolute',
        right:15,
        top: 10
        
    },
    search:{
        backgroundColor:'#1B3230',
        padding:10,
        borderRadius: 9,
        fontSize:18,
        fontFamily: 'mont',
        borderWidth:2,
        borderColor: '#02FFE3',
        
    }
});