import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Splachscreen from '../screens/Auth/Splachscreen'
import LoginScreen from '../screens/Auth/LoginScreen';
import MainNav from './MainNav';
import DrawerNav from './DrawerNav';
import RegisterScreen from '../screens/Auth/RegisterScreen';

import { MainContext } from '../hooks/MainContext';

const Stack = createStackNavigator();

const AuthNav = () => {

  let { auth } = useContext(MainContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {auth ?(
        <Stack.Screen name='Main' component={DrawerNav} />
      ):
        <>
          <Stack.Screen name='splach' component={Splachscreen} />
          <Stack.Screen name='login' component={LoginScreen} />
          <Stack.Screen name='register' component={RegisterScreen} />
        </>
      }
    </Stack.Navigator>
  )
}

export default AuthNav