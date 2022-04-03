import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Splachscreen from '../screens/Splachscreen'
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthNav = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='splach' component={Splachscreen} />
        <Stack.Screen name='login' component={LoginScreen} />

    </Stack.Navigator>
  )
}

export default AuthNav