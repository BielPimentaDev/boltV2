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
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

  const [speed, setSpeed] = React.useState();
  const [position, setPosition] = React.useState(null);
  const [watcher, setWatcher] = React.useState(null);
  const [balance, setBalance] = React.useState(0);
  const [initialPosition, setInitialPosition] = React.useState(null);

  React.useEffect(() => {
    const results = calculateDistance();
    console.log(results);
  }, [position]);

  React.useEffect(() => {
    console.log(speed);
  }, [speed]);

  const signature = {
    start: { autonomy: 100, rest: 2 },
    plus: { autonomy: 200, rest: 3 },
    top: { autonomy: 400, rest: 4 },
    premium: { autonomy: 800, rest: 6 },
  };

  function calculateDistance() {
    const toRadian = (n) => (n * Math.PI) / 180;

    let lat2 = position?.lat;
    let lon2 = position?.lng;
    let lat1 = initialPosition?.lat;
    let lon1 = initialPosition?.lng;

    let R = 6378137; // km
    let x1 = lat2 - lat1;
    let dLat = toRadian(x1);
    let x2 = lon2 - lon1;
    let dLon = toRadian(x2);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d;
  }

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
    const location = await getCurrentPositionAsync();
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
