import React, {useContext} from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';


import Categorie_card from '../components/Categorie_card';

import { MainContext } from '../hooks/MainContext';

const windowheight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;

const HameScreen = () => {

  let {auth, setChanged} = useContext(MainContext);
  // let x = JSON.parse(auth)
  console.log(auth)
  const Logout = async () => {
    await AsyncStorage.removeItem('user');
    return setChanged("Loggedout")
  }

  return (
    <View style={{flex: 1}}>

      <LinearGradient
        // Background Linear Gradient
        colors={['#248DE7', '#4077ED', '#3D50C7']}
        style={{width: '100%', height: windowheight * 0.35}} 
      >

        <TextInput
          placeholder='Search ..'
          style={{marginTop: '30%', backgroundColor: '#fff', marginHorizontal: '5%', borderRadius: 5, paddingLeft: 15, paddingVertical: 3, fontSize: 18}}
        />

      </LinearGradient>
      <View style={{width: '100%', height: windowheight * 0.65, marginTop: -windowheight * 0.07 ,  }} >
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: windowwidth * 0.09, justifyContent: 'space-between', paddingBottom: windowwidth * 0.035}}>
          <Categorie_card />
          <Categorie_card />
          <Categorie_card />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: windowwidth * 0.09, justifyContent: 'space-between', paddingBottom: windowwidth * 0.035}}>
          <Categorie_card />
          <Categorie_card />
          <Categorie_card />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: windowwidth * 0.09, justifyContent: 'space-between', paddingBottom: windowwidth * 0.035}}>
          <Categorie_card />
          <Categorie_card />
          <Categorie_card />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: windowwidth * 0.09, justifyContent: 'space-between', paddingBottom: windowwidth * 0.035}}>
          <Categorie_card />
          <Categorie_card />
          <Categorie_card />
        </View>
      </View>

    </View>
  )
}

export default HameScreen