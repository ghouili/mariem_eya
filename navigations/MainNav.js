import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HameScreen';
import DonateScreen from '../screens/DonateScreen';
import Profile from '../screens/Auth/Profile';
import UserMedicNav from './UserMedicNav';
// import grid_example from '../screens/grid_example';

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
        <Tab.Screen name="Donations" 
            component={UserMedicNav} 
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="hand-holding-medical" color={color} size={26} />
                )
            }} 
        />
        
        <Tab.Screen name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-edit"  color={color} size={26} />
                )
            }} 
        />
    </Tab.Navigator>
  )
}

export default MainNav