import { View, Text, StyleSheet } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'
import { Txt, TxtBg, TxtLght } from '../../common/styles/styles'

let barList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
const status = [
    {
        number: '150',
        text: 'Remaining',
        type: 'text'
    },
    {
        number: '95,2',
        text: 'Turn',
        type: 'text'
    },
    {
        number: '7.5',
        text: 'DrivePoints',
        type: 'price'
    },
]

export default function Status() {
 
    
  return (
    <View >
      <LinearGradient style={styles.container}  colors={['#16ac9a', '#02352F']} end={{x:0.9, y:0.1}}>
      <Txt>Status</Txt>
      
      <View>
        <View style={styles.barListContainer}>
            {barList.map(number=>{
               if (number >= 20){
                   
                   return <View key={number } style={styles.barDisable}/>
                }
                else{
                    
                    return <View key={number } style={styles.bar}/>
                }
            })}
              
            
        </View>
        <View style={styles.statusContainer}>
            {status.map(item =>{
                return(
                    <>
                    <View key={item.number} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View  key={item.number} style={{flexDirection: 'row', alignItems:'flex-end', margin: 5}}>
                            <TxtBg>{item.number}</TxtBg>
                            {item.type === 'text' ? <Txt style={{marginHorizontal:5}}>km</Txt> : <Txt style={{marginHorizontal:5}}>$</Txt>}
                        </View>
                        <TxtLght>{item.text}</TxtLght>
                    </View>
                    </>
                )
            }
                
            )}
        </View>
      </View>

     
        </LinearGradient> 
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        backgroundColor: '#067568',
        justifyContent: 'space-around',
        padding:10,
        alignItems: 'center',
        borderWidth: 2,
        
        borderColor: '#02FFE3'

    },
    barListContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },
    bar:{
        width:5,
        height:40,
        backgroundColor: '#02FFE3',
        
        marginHorizontal:4,
        marginTop:10
       
        
    },
    barDisable:{
        width:5,
        height:40,
        backgroundColor: '#02FFE3',
        marginHorizontal:4,
        opacity: 0.5,
        marginTop:10
    },
    statusContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    }
});