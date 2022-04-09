import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HameScreen';
import DetailScreen from '../screens/DetailScreen';

const MainNav = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black'
            
        }}
    >
        <Tab.Screen name="Home"
            component={HomeScreen}
            options={{
                tabBarIcon: ({ color }) => (
                    <AntDesign name="home" color={color} size={26} />
                )
            }}    
        />
        <Tab.Screen name="Details" 
            component={DetailScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-details-outline" color={color} size={26} />
                )
            }} 
        />
    </Tab.Navigator>
  )
}

export default MainNav