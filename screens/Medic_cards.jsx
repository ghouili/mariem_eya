import React, {useContext, useState, useEffect} from 'react'
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
  const [selectedValue, setSelectedValue] = useState('');
  // let x = JSON.parse(auth)
  console.log(auth)
  const Logout = async () => {
    await AsyncStorage.removeItem('user');
    return setChanged("Loggedout")
  }

  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');
  
  const fetchdata = async () => {

      let response = await fetch(`${path}/produit`,{
          method:"GET",
          headers: {
              "Content-Type": "application/json"
          
          }
      });

      let result = await response.json();
      if (result.message === "success") {
          setmasterData(result.data);
          setfilterData(result.data);
      }
  }


  useEffect(() => {
      fetchdata();
  }, [])
  

  const searchFilter = (text) => {
    if(text) {
      const NewData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(NewData);
      setsearch(text);
    } else {
      setfilterData(masterData);
      setsearch(text);
    }
  }
  
  const TypeFilter = (text) => {
    if(text) {
      const NewData = masterData.filter((item) => {
        const itemData = item.type ? item.type.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(NewData);
      setSelectedValue(text);
    } else {
      setfilterData(masterData);
      setSelectedValue(text);
    }
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
              onChangeText={(text) => searchFilter(text)}
          />    

          <View style={{ width: '35%', backgroundColor: '#fff', borderRadius: 5, padding: 0}} >
              <Picker
                  selectedValue={selectedValue}
                  style={{ width: '100%', margin: 0 }}
                  onValueChange={(itemValue, itemIndex) => TypeFilter(itemValue)}
              >
                  <Picker.Item label="All" value="" />
                  <Picker.Item label="Médicament" value="Médicament" />
                  <Picker.Item label="parapharmacie" value="parapharmacie" />
              </Picker>
          </View>
        </View>

      </LinearGradient>

      <View style={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop : -windowheight * 0.07, paddingHorizontal: 15}}>

        {filterData.map(({image, _id, title}, idx)=> {
            return (
                <View key={idx}>
                    <Card_Medic  image={image} title={title} id={_id} />
                </View>
            )
        })}
      </View>

    </View>
  )
}

export default Medic_cards