import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Splachscreen from '../screens/Splachscreen'
import LoginScreen from '../screens/LoginScreen';
import MainNav from './MainNav';
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
        <Stack.Screen name='Main' component={MainNav} />
      ):
        <>
          <Stack.Screen name='splach' component={Splachscreen} />
          <Stack.Screen name='login' component={LoginScreen} />
        </>
      }
    </Stack.Navigator>
  )
}

export default AuthNav