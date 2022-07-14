import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'
import CarComponentCard from './CarComponentCard'
import Battery from './Battery';
import { ScrollView } from 'react-native';



export default function Main() {
  return (
      <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto"/>

        <Image source={require("../../assets/imgs/logo2.png")}/>
      <CarComponentCard/>

      <View style={{flexDirection:'row', margin: 10}}>
        <View style={styles.card}><Battery/></View>

        <View style={{justifyContent:'space-around'}}>
          <View style={styles.card}>
            <Text style={styles.title}>NFT Drive Store</Text>
                <Image source={require('../../assets/imgs/generic_car2.png')} style={{width:200, height:100}}/>
          </View>
          <View style={styles.card}>
                <Text style={styles.title}>Remaining Distance</Text>
            <View style={{flexDirection:'row', alignItems:"flex-end", marginTop: 10}}>
                <Text style={styles.kmBig}>128</Text>
                <Text style={styles.km}>Km</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#021C19',
        alignItems:'center',
        justifyContent:'center',
        padding: 10

    },
    card:{
        backgroundColor:'#182724',
        padding:10,
        width: 190,
        borderRadius:20,
        alignItems:'center',
       
        marginHorizontal:5
    },
    title:{
        color:'white',
        fontSize: 14,
        fontFamily: 'montSemiBold',
        marginBottom:10
    },
    km:{
        color: '#08FDDA',
        fontFamily:'montSemiBold',
        paddingBottom:15,
        paddingLeft:5,
        marginRight: 20
        
    },
    kmBig:{
        color: '#08FDDA',
        fontSize: 50,
        fontFamily: 'montBold',
        
        
    }
});