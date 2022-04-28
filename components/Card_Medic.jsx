import React from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import {Card} from 'react-native-shadow-cards';

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const Card_Medic = ({ title, image, id }) => {
  console.log('====================================');
  console.log(image + '  ' + title );
  console.log('====================================');
  return (
    <TouchableOpacity >
      <Card style={{width: windowWidth * 0.4, height:  windowheight * 0.25, borderRadius: 5, alignContent: 'center', alignItems: 'center', backgroundColor: '#fff', margin: windowWidth * 0.027 }}>
        
          <Image
              // source={{ uri: `${path}uploads/images/${image}`}}
              source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}}
              style={{ width: '100%', height: windowheight * 0.2, borderTopLeftRadius: 5, borderTopRightRadius: 5}}
          />
          <View style={{ width: '100%', height: windowheight * 0.05, alignItems: 'center', alignContent: 'center'}}  >
              <Text>{title}</Text>
          </View>
      </Card>
    </TouchableOpacity>
  )
}

export default Card_Medic