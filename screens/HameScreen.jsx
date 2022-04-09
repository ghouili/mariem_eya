import React, {useContext} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../hooks/MainContext';

const HameScreen = () => {

  let {auth, setChanged} = useContext(MainContext);
  console.log(auth)

  const Logout = async () => {
    await AsyncStorage.removeItem('user');
    return setChanged("Loggedout")
  }

  return (
    <View>
      <Text>HameScreen</Text>
      <Text>HameScreen</Text>
      <Text>HameScreen</Text>
      <Text>HameScreen</Text>
      <Text>HameScreen</Text>
      {auth &&
      <Text>{auth.email}</Text>
      }

      <TouchableOpacity
        onPress={Logout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HameScreen