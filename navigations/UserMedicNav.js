import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import UserMedics from '../screens/user_medicament/UserMedics';
import UserAddMedics from '../screens/user_medicament/UserAddMedics';
import Details_UserMedic from '../screens/user_medicament/Details_UserMedic';

const Stack = createStackNavigator();

const UserMedicNav = () => {


  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      
        <Stack.Screen name='Medics' component={UserMedics} />
        <Stack.Screen name='Add-Medics' component={UserAddMedics} />
        <Stack.Screen name='Details_UserMedic' component={Details_UserMedic} />
        
    </Stack.Navigator>
  )
}

export default UserMedicNav