import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {Card} from 'react-native-shadow-cards';

const windowWidth = Dimensions.get('window').width;

const Categorie_card = () => {
  return (
    <Card style={{width: windowWidth * 0.25, height:  windowWidth * 0.25, borderRadius: 5, alignContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text>Categorie_card</Text>
    </Card>
  )
}

export default Categorie_card