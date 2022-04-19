import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../hooks/MainContext';

const windowheight = Dimensions.get('window').height;

const HameScreen = () => {

  let {auth, setChanged} = useContext(MainContext);
  console.log(auth)

  const Logout = async () => {
    await AsyncStorage.removeItem('user');
    return setChanged("Loggedout")
  }

  return (
    <View style={{marginTop: windowheight * 0.1}}>
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