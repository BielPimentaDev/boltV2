import { View, Text, StyleSheet, Pressable, StatusBar, Image } from 'react-native'
import React from 'react'
import { Txt, TxtBg } from '../../common/styles/styles';
import DrivePoints from './DrivePoints';
import WalletList from './WalletList';

export default function Index() {
  return (
    <View style={styles.container}>
        <StatusBar/>

     <View style={styles.header}>

        <Image source={require('../../assets/imgs/avatar.png')} style={styles.picture}/>
        <View>
            <Txt style={styles.name}>John Marcus Doe</Txt>
            <Text style={styles.subname}>@AceGarxia</Text>
        </View>

     </View>
     <TxtBg>Wallet</TxtBg>
     <DrivePoints/>

        <View style={styles.buttonSection}>
    
         <Pressable style={styles.button}>
            <Txt style={{textAlign: 'center'}}>Send</Txt>
         </Pressable>
         <Pressable style={styles.buttonGreen}>
            <Txt style={{textAlign: 'center'}}>Send</Txt>
         </Pressable>
        </View>

        <WalletList/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: '100%',
        backgroundColor:'#021C19',
        padding:10
       
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: 10
        
    },
    picture:{
        borderRadius:100,
        width:100,
        height:100,
        backgroundColor:'gray',
        borderWidth:10,
        borderColor:'white',
        
    },
    name:{
        color:'#5649DF',
        fontFamily: 'montBold',
        fontSize: 24,
        marginLeft:10,
        marginBottom:10
    },
    subname:{
        color: '#D0CCF6',
        fontFamily:'mont',
        fontSize: 14,
        marginLeft:10,
    },
    button:{
        backgroundColor: '#9142FF',
        borderRadius:24,
        padding:10,
        width:'45%',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonGreen:{
        backgroundColor: '#00D092',
        borderRadius:24,
        padding:10,
        width:'45%',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonSection:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:15
    }
});