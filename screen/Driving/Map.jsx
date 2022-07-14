import * as React from "react";

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
  Image,
} from "react-native";


export default function App() {
  const [locationPicked, setLocationPicked] = React.useState();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function VerifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const PermissionResponse = await requestPermission();
      return PermissionResponse;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insuficient Permissions", "You need to grant permission");
      return false;
    }
    return true
  }
  async function getLocationHandler() {
      const hasPermission = await VerifyPermissions();
      if(!hasPermission){
          return
        }
        const location = await getCurrentPositionAsync();
        setLocationPicked({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
    
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
  }

  return (
    <View style={styles.container}>
       
      <Button onPress={getLocationHandler} title='take current location' />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{       
        width: '100%',
        justifyContent:'flex-end'
    }
    ,
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})