import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Txt, TxtBg, TxtLght } from '../../common/styles/styles'

let barList = []
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
    {for (let i= 0; i<24; i++){
        barList.push(i+1)
        }}
    
  return (
    <View style={styles.container}>
       
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
                    <View key={item.text} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems:'flex-end', margin: 5}}>
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
        margin: 2,
        
    },
    barDisable:{
        width:5,
        height:40,
        backgroundColor: '#02FFE3',
        margin: 2,
        opacity: 0.5
    },
    statusContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    }
});