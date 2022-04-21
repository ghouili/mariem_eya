import React, { useState, useContext } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, Alert   } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MainContext } from '../../hooks/MainContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {

    let { setChanged } = useContext(MainContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(false);

    const submit = async () => {

        let result = await fetch(`${path}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        //convertin responce to json
        let resultData = await result.json();
        //checking if there is data
        if (!resultData) {
            return Alert.alert(
                'ERROR',
                "Nothing came back",
                [{ text: 'fermer' }]
            );
        }

        if (resultData.message === 'success') {
            const jsonValue = JSON.stringify(resultData.data);
            await AsyncStorage.setItem('user', jsonValue);
            setChanged("logged");
            
            Alert.alert(
                'Success',
                `Welcome Mr(s) ${resultData.data.email} `,
                [{ text: 'fermer' }]
            );
        }

    }

  return (
    <ScrollView style={{}}>
        <View style={{height: windowHeight * 0.5, alignItems: 'center', justifyContent: 'center', paddingTop: "10%"}}>
            <Text style={{fontSize: 35, fontWeight: '700', color: "#0293d9"}}>Dawini</Text>
            <Animatable.Image
                animation="zoomInDown" 
                style={{width: windowWidth* 0.6, height: windowHeight * 0.28}}
                source={require('../../assets/medics.png')}
            />
        </View>

        <Animatable.View animation="fadeInUpBig" style={{height: windowHeight * 0.5, borderTopEndRadius: 20, borderTopStartRadius: 20, paddingTop: "10%", backgroundColor: "#38607d"}}>

            <View style={{marginLeft: windowWidth * 0.05, marginBottom: "4%"}}>
                <Text style={{fontSize: 20, fontWeight: '300', marginBottom: "3%", color: "#fff"}}>Username : </Text>
                <TextInput
                    style={{width: windowWidth * 0.7,borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft: windowWidth * 0.05, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                    placeholderTextColor="#fff"
                    onChangeText={(text)=> setEmail(text)}
                    placeholder="Username"
                    keyboardType="default"
                />
            </View>

            <View style={{marginLeft: windowWidth * 0.05, marginBottom: "10%"}}>
                <Text style={{fontSize: 20, fontWeight: '300', marginBottom: "3%", color: "#fff"}}>Password : </Text>
                <TextInput
                    style={{width: windowWidth * 0.7,borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft: windowWidth * 0.05, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                    placeholderTextColor="#fff"
                    onChangeText={(val) => setPassword(val)}
                    placeholder="password"
                    secureTextEntry={secure}
                    keyboardType="default"
                />
            </View>
            
            <TouchableOpacity
                style={{backgroundColor: '#63CCFF', width: windowWidth * 0.6, borderRadius: 5, paddingVertical: "2%", alignItems: 'center', alignSelf: 'center'}}
                onPress={submit}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontWeight: '300', color: "#fff"}}>Log In</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: "2%"}}>
                <Text style={{color: "#fff"}}>If you don't have an account </Text><TouchableOpacity
                 onPress={() => navigation.navigate('register')}
                ><Text style={{ color: "#63CCFF"}}>Sign Up</Text></TouchableOpacity>
            </View>
        </Animatable.View>
    </ScrollView>
  )
}

export default LoginScreen