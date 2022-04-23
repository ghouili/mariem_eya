import React, {useContext, useState} from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import {Picker} from '@react-native-picker/picker';


import Card_Medic from '../components/Card_Medic';

import { MainContext } from '../hooks/MainContext';

const windowheight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;

const Medic_cards = () => {

  let {auth, setChanged} = useContext(MainContext);
  const [selectedValue, setSelectedValue] = useState("java");
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

        <View style={{ width: '100%', flexDirection: 'row', marginTop: '30%', justifyContent: 'space-evenly', alignItems: 'center'}} >
            <TextInput
                placeholder='Search ..'
                style={{ backgroundColor: '#fff', borderRadius: 5, paddingLeft: 15, paddingVertical: 3, fontSize: 18, width: '50%'}}
            />    

            <View style={{ width: '35%', backgroundColor: '#fff', borderRadius: 5, padding: 0}} >
                <Picker
                    selectedValue={selectedValue}
                    style={{ width: '100%', margin: 0 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>

      </LinearGradient>
      <View style={{width: '100%', height: windowheight * 0.65, marginTop: -windowheight * 0.07 ,  }} >
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: windowwidth * 0.035}}>
            <Card_Medic />
            <Card_Medic />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: windowwidth * 0.035}}>
            <Card_Medic />
            <Card_Medic />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', paddingBottom: windowwidth * 0.035}}>
            <Card_Medic />
            <Card_Medic />
        </View>
       
      </View>

    </View>
  )
}

export default Medic_cards