import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import {Card} from 'react-native-shadow-cards';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Card_Medic = () => {
  return (
    <Card style={{width: windowWidth * 0.45, height:  windowheight * 0.25, borderRadius: 5, alignContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}}
            style={{ width: '100%', height: windowheight * 0.2, borderRadius: 5}}
        />
        <View style={{ width: '100%', height: windowheight * 0.05, alignItems: 'center', alignContent: 'center'}}  >
            <Text>Card_Medic</Text>
        </View>
    </Card>
  )
}

export default Card_Medic