import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Login from './screen/Login'
import Main from './screen/Main/Index'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';



export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarStyle:{
      backgroundColor: '#171626'
    }}}>
      <Tab.Screen name="Login" component={Login} />
    
      <Tab.Screen name="Main" component={Main} />
    </Tab.Navigator>
    </NavigationContainer>
 
  )
}