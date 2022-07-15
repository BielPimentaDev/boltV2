import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screen/Login';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screen/Main/Index';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import Routes from './Routes';
import Driving from './screen/Driving/Index';
import Wallet from './screen/Wallet/Index';
import Marketplace from './screen/Marketplace/Index';

import Congratulation from './screen/Congratulation/Index';

const Tab = createBottomTabNavigator();

export default function App() {
	const [loaded] = useFonts({
		mont: require('./assets/fonts/Montserrat-Medium.ttf'),
		montBold: require('./assets/fonts/Montserrat-Bold.ttf'),
		montSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
		montExtraBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
		montBoldItalic: require('./assets/fonts/Montserrat-BoldItalic.ttf'),
	});
	if (!loaded) {
		return null;
	}
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#fff',
					tabBarStyle: {
						backgroundColor: '#04E3C3',
					},
				}}>
				<Tab.Screen
					name='Marketplace'
					component={Marketplace}
					options={{
						tabBarIcon: () => (
							<Ionicons name='car-sport-sharp' size={24} color='black' />
						),
					}}
				/>
				<Tab.Screen
					name='Wallet'
					component={Wallet}
					options={{
						tabBarIcon: () => (
							<Ionicons name='car-sport-sharp' size={24} color='black' />
						),
					}}
				/>
				<Tab.Screen
					name='Congratulation'
					component={Congratulation}
					options={{
						tabBarIcon: () => <Entypo name='home' size={24} color='black' />,
					}}
				/>
				<Tab.Screen
					name='Login'
					component={Login}
					options={{
						tabBarIcon: () => (
							<Ionicons name='car-sport-sharp' size={24} color='black' />
						),
					}}
				/>

				<Tab.Screen
					name='Main'
					component={Main}
					options={{
						tabBarIcon: () => (
							<Ionicons name='md-grid-outline' size={24} color='black' />
						),
					}}
				/>
				<Tab.Screen
					name='Driving'
					component={Driving}
					options={{
						tabBarIcon: () => (
							<Ionicons name='person' size={24} color='black' />
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#031E1C',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
