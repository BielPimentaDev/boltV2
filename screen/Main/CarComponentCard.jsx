import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'; 

export default function CarComponentCard() {
  return (
    <View style={styles.container}>
      <View style={styles.background}/>
        
          <Image source={require('../../assets/imgs/CAR.png')} style={styles.carImage}/>
 
        <View >
          <View style={styles.ballContainer}>
            <View style={styles.ball}/>
            <View style={styles.ball}/>
            <View style={styles.ballPick}/>
            <View style={styles.ball}/>
            <View style={styles.ball}/>
          </View>

            <View style={styles.infoBox}>
              <Text style={styles.textBig}>128</Text>
              <Text style={styles.text}>KM Left</Text>
              <View style={{alignItems:'center'}}>
                <View style={styles.barContainer}>
                  <View style={styles.barContent}>
                  <Image source={require('../../assets/imgs/zap.png')} style={{width:20, height:20}}/>
                  </View>
                </View>
                <Text style={styles.text}>1h 13m Remaining</Text>
              </View>
            </View>
        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{

    borderRadius:8,
    position:'relative'
  },

  background:{
    backgroundColor:'#02FFE3',
    width:'100%',
    bottom:0,
    height:'65%',
    position:'absolute',
    borderRadius:8,


  },

  carImage:{
    width:400,
     height:200,
     
  },
  ballContainer:{
    flexDirection: 'row',
    justifyContent:'space-evenly',
    width:'100%',
    alignContent:'center',
    alignItems:'center',
  
   paddingHorizontal:60
    
  },
  ball:{
    width:10,
    height:10,
    borderRadius:50,
    backgroundColor:'black',
    opacity:0.5
  },
  ballPick:{
    width:15,
    height:15,
    borderRadius:50,
    backgroundColor:'white'
  },
  infoBox:{
    padding:20,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignContent:'center',
    alignItems:'center'
  },
  text: {
    fontFamily: 'montSemiBold',
    fontSize:14
  },
  textBig:{
    fontFamily: 'montBold',
    fontSize:32
  },
  barContainer:{
    width: '100%',
    margin:10,
    height:30,
    backgroundColor:'#01A78F',

    borderRadius:8
  }
  ,
  barContent:{
    backgroundColor:'black',
    height:'100%',
    width: '50%',
    borderRadius:8,
    alignItems:"flex-end",
    justifyContent:'center',
    paddingRight:10,
  }
});