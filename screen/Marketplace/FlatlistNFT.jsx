import { View, Text, StyleSheet, FlatList, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Txt, TxtBg } from '../../common/styles/styles';
import { Dimensions } from 'react-native';


export default function FlatlistNFT() {
    const nfts=[
        {
            image : <Image source={require('../../assets/imgs/nft_ex.png')} style={styles.image}/>,
            price: '1000',
            id: 1
        },
        {
            image : <Image source={require('../../assets/imgs/nft_1.png')} style={styles.image}/>,
            price: '1000',
            id: 2
        },
        {
            image : <Image source={require('../../assets/imgs/nft_2.png')} style={styles.image}/>,
            price: '1000',
            id: 3
        },
        {
            image : <Image source={require('../../assets/imgs/nft_3.png')} style={styles.image}/>,
            price: '1000',
            id: 4
        },
    ]
  const ItemRenders = ({ price , image}) => (
    <View style={styles.item}>
      {image}
      <View style={{flexDirection:'row', alignItems: 'center'}}>
          <Text style={styles.itemText}>${price}</Text>
          <Image source={require('../../assets/imgs/drive-points.png')} style={{width:20, height:20}}/>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.MainContainer}>
 
      <Text style={styles.titleText}>
     Hot NFT
      </Text>
 
      <FlatList
    
        data={nfts}
        renderItem={({ item }) => <ItemRenders  key={ item.id} price={item.price} image={item.image}/>}       

        horizontal={true}
      />
 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemText:{
        color:'white',
        margin: 10,
        fontFamily: 'montBold',
        fontSize:15
    },
    image:{
        width: 140,
         height:170,
         borderWidth:2,
         borderColor: '#02FFE3',
         borderRadius: 15,
         marginRight: 20,
    
    },
    titleText:{
        fontFamily: 'montBold',
        color: 'white'
        ,
        margin: 20
    },
    titleText:{
        fontFamily: 'montBold',
        fontSize:23,
        color:'white',
        margin:10
    }
});