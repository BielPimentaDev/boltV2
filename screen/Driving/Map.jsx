import * as React from "react";

import {
  Accuracy,
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
  watchPositionAsync,
} from "expo-location";

import { Alert, Button, Dimensions, StyleSheet, View } from "react-native";

export default function App() {
  const [locationPicked, setLocationPicked] = React.useState();
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [endPoint, setEndPoint] = React.useState({ lat: -22.9094734, lng: -43.1080839 });
  const [actualLocation, setActualLocation] = React.useState({});
  const [speed, setSpeed] = React.useState();

  async function VerifyPermissions() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const PermissionResponse = await requestPermission();
      return PermissionResponse;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert("Insuficient Permissions", "You need to grant permission");
      return false;
    }
    return true;
  }
  async function watchPosition() {
    const hasPermission = await VerifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setActualLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    let locationSubscrition = null;
    while (actualLocation.lat !== endPoint.lat && actualLocation.lng !== endPoint.lng) {
      locationSubscrition = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          distanceInterval: 1,
          timeInterval: 1000,
        },
        (location) => {
          setActualLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
          setSpeed(location.coords.speed);
        }
      );
    }
    locationSubscrition?.remove();
    setSpeed(0);
  }

  return (
    <View style={styles.container}>
      <Button onPress={watchPosition} title="take current location" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-end",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
