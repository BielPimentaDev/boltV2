import { getPreciseDistance } from "geolib";
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
  const userSignature = "start";
  const signature = {
    start: { battery: 100, rest: 2, reward: 1.05 },
    plus: { battery: 200, rest: 3, reward: 1.1 },
    top: { battery: 400, rest: 4, reward: 1.15 },
    premium: { battery: 800, rest: 6, reward: 1.2 },
  };
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [speed, setSpeed] = React.useState();
  const [position, setPosition] = React.useState(null);
  const [watcher, setWatcher] = React.useState(null);
  const [balance, setBalance] = React.useState(0);
  const [initialPosition, setInitialPosition] = React.useState(null);
  const [battery, setBattery] = React.useState(signature[userSignature].battery);
  const [totalBalance, setTotalBalance] = React.useState(0);
  const [totalBattery, setTotalBattery] = React.useState(signature[userSignature].battery);

  React.useEffect(() => {
    if (initialPosition) {
      const meters = getPreciseDistance(
        { latitude: initialPosition?.lat, longitude: initialPosition?.lng },
        { latitude: position?.lat, longitude: position?.lng },
        0.01
      );
      const kilometers = meters / 1000;
      setBalance(kilometers * signature[userSignature].reward);
      setBattery(signature[userSignature].battery - kilometers);
    }
  }, [position]);

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

  const startForegroundUpdate = async () => {
    const hasPermission = await VerifyPermissions();
    if (!hasPermission) {
      return;
    }
    watcher?.remove();
    const location = await getCurrentPositionAsync({ enableHighAccuracy: true });
    setInitialPosition({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    setWatcher(
      await watchPositionAsync({ accuracy: Accuracy.BestForNavigation }, (loc) => {
        setPosition({ lat: loc.coords.latitude, lng: loc.coords.longitude });
        setSpeed(loc.coords.speed);
      })
    );
  };

  const stopTracking = async () => {
    setTotalBalance(totalBalance + balance);
    setTotalBattery(totalBattery - (totalBattery - battery));
    setSpeed(0);
    await watcher?.remove();
  };

  return (
    <View style={styles.container}>
      <Button onPress={startForegroundUpdate} title="take current location" />
      <Button onPress={stopTracking} title="stop current location" />
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
