import React, {useContext, useState} from 'react'
import { View, Text, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { FAB } from 'react-native-paper';

import Categorie_card from '../components/Categorie_card';

import { MainContext } from '../hooks/MainContext';

const windowheight = Dimensions.get('window').height;
const windowwidth = Dimensions.get('window').width;

const categories = [
  {title : "blood medics", },
  {title : "blood", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
  {title : "blood medics", },
]

const HameScreen = () => {

  let {auth, setChanged} = useContext(MainContext);

  const [filterData, setfilterData] = useState(categories);
  const [masterData, setmasterData] = useState(categories);
  const [search, setsearch] = useState('');
  
  // let x = JSON.parse(auth)
  console.log(auth)
  const Logout = async () => {
    await AsyncStorage.removeItem('user');
    return setChanged("Loggedout")
  }

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



  return (
    <View style={{flex: 1}}>
      <ScrollView>

        <LinearGradient
          // Background Linear Gradient
          colors={['#248DE7', '#4077ED', '#3D50C7']}
          style={{width: '100%', height: windowheight * 0.35}} 
        >

          <TextInput
            placeholder='Search ..'
            style={{marginTop: '30%', backgroundColor: '#fff', marginHorizontal: '5%', borderRadius: 5, paddingLeft: 15, paddingVertical: 3, fontSize: 18}}
            onChangeText={(texte) => searchFilter(texte)}
          />

        </LinearGradient>
        <View style={{maxWidth: windowwidth * 0.88, marginTop: -windowheight * 0.07 , flexDirection: 'row',  marginHorizontal: windowwidth * 0.06, flexWrap: 'wrap' }} >

          {filterData.map(({title}, idx) => {
            return (
              <View key={idx}>
                <Categorie_card  title={title} />
              </View>
            );
          })}
            

          
        </View>
        {/* <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: '#248DE7'
          }}
          animated
          // small
          icon="plus"
          onPress={() => console.log('Pressed')}
        /> */}
      </ScrollView>
    </View>
  )
}

export default HameScreen