import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Switch } from 'react-native';

export default function Batery() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Batery</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#01F2CF" }}
        thumbColor={isEnabled ? "#213B33" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
      </View>

      <View style={styles.battery}>
        <View style={styles.batteryContent}/>
        <Text style={styles.biggerText}>60</Text>
        <Text style={styles.smallText}>%</Text>
      </View>
     <Text style={{color: '#01F2CF'}}>Buy energy</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
   justifyContent: 'space-between',
   alignItems:'center',
   alignContent:'center',
  height:270

  },
  titleRow:{
    flexDirection: 'row',
    alignItems:'center',
  },
  title:{
    marginRight:50,
    color:"white",
    fontFamily: 'montSemiBold'
   },

   battery:{
    borderWidth:1,
    borderColor: 'white',
    height:150,
    width:120,
    padding:10,
    borderRadius:22,
    position:'relative',
    justifyContent:'center',
    alignContent: 'center',
    alignItems: 'center'
   },
   batteryContent:{
    position: 'absolute',
    bottom: 0,
    width: 120,
    height:"60%",
    backgroundColor: '#01F2CF',
    borderBottomRightRadius:22,
    borderBottomLeftRadius: 22

   },
   biggerText:{
    fontSize:50,
    fontFamily:'montBold',
    color: 'white'
   },
   smallText:{
    fontSize:20,
    color: 'white',
    
   }
});
