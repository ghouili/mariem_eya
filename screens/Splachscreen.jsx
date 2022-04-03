import React from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image  } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Splachscreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
        <View style={{height: windowHeight * 0.8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 35, fontWeight: '700', color: "#0293d9"}}>Dawini</Text>
            <Text style={{fontSize: 20, fontWeight: '200', color: "#242424", marginHorizontal: "10%"}}>u have medics that u can share with us or u need some, come join us right away. </Text>
            <Animatable.Image
                animation="zoomInDown" 
                style={{width: windowWidth* 0.6, height: windowHeight * 0.28, marginTop: "10%"}}
                source={require('../assets/dawini.png')}
            />
        </View>

        <View style={{height: windowHeight * 0.2, justifyContent: 'center'}}>
            <TouchableOpacity
                style={{backgroundColor: '#63CCFF', width: windowWidth * 0.7, borderRadius: 5, paddingVertical: "2%", alignItems: 'center', alignSelf: 'center'}}
                onPress={()=>navigation.navigate('login')}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontWeight: '300'}}>Dive In</Text>
                    <Animatable.View animation="slideInLeft" style={{marginTop: "2.5%", marginLeft: "2%"}}>
                        <FontAwesome name='arrow-right' size={15}  />
                    </Animatable.View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Splachscreen