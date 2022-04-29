import React, { useState, useContext } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, ScrollView, Alert   } from 'react-native'
import {
    Dialog,
    } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Divider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'
import mime from 'mime';

import { MainContext } from '../../hooks/MainContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({ navigation }) => {

    let { setChanged } = useContext(MainContext);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [adresse, setAdresse] = useState('');
    const [tel, setTel] = useState();
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(false);

    

    const pickFromGallery = async()=>{

        let data= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        // console.log(data);
        if(!data.cancelled){
            setImage(data);
            setVisible(!visible);
        }

    } 

    const pickFromCamera= async()=>{
        let data= await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        // console.log(data);
        if(!data.cancelled){
            setImage(data);
            setVisible(!visible);
        }

    } 

    const submit = async () => {
        // const jsonValue = JSON.stringify({name: 'mariem + eya', email: 'pfe@gmail.com', avatar: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'});
        // await AsyncStorage.setItem('user', jsonValue);
        // setChanged("logged");
        const formData = new FormData();
        if (image) {

            const fileUri = image.uri;
            const newImageUri = "file:///" + fileUri.split("file:/").join("");        
            formData.append("avatar", {
                uri: newImageUri,
                type: mime.getType(newImageUri),
                name: newImageUri.split("/").pop(),
            });
        }
        formData.append('email', email);
        formData.append('nom', nom);
        formData.append('prenom', prenom);
        formData.append('adresse', adresse);
        formData.append('tel', tel);
        formData.append('password', password);
        console.log(formData);

        // console.log (formData);
        // let response = await axios.post(`${path}/produit/add`, formData);

        // console.log(response.data);
        let response = await fetch(`${path}/user/register`,{
            method:"POST",
            headers: {
                Accept: "application/json",
            "Content-Type": "multipart/form-data",
            },
            body:formData
        });

        //convertin responce to json
        let resultData = await response.json();
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
                `Welcome Mr(s) ${resultData.data.prenom} `,
                [{ text: 'fermer' }]
            );
        }

    }

  return (
    <ScrollView style={{}}>
        <View style={{height: windowHeight * 0.45, alignItems: 'center', justifyContent: 'center', paddingTop: "10%"}}>
            <Text style={{fontSize: 35, fontWeight: '700', color: "#0293d9"}}>Dawini</Text>
            {/* <Animatable.Image
                animation="zoomInDown" 
                style={{width: windowWidth* 0.6, height: windowHeight * 0.28}}
                source={require('../assets/medics.png')}
            /> */}
        </View>

        <Animatable.View animation="fadeInUpBig" style={{height: windowHeight * 0.55, borderTopEndRadius: 20, borderTopStartRadius: 20, paddingTop: "5%", backgroundColor: "#38607d"}}>

            <View style={{marginLeft: windowWidth * 0.05, marginBottom: "4%",marginRight: windowWidth * 0.05, }}>

                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}} >

                    <TouchableOpacity
                        style={{borderRadius: 250, borderWidth: 1, width: 45.5, height: 46.5, borderColor: 'white', padding: 0, display: 'flex', alignContent: 'center', alignItems: 'center'}}
                        onPress={() => setVisible(!visible)}
                    >
                        {image ?
                            <Image
                                style={{width: 45, height: 45, resizeMode: 'contain', borderRadius: 250,  }}
                                source={{uri: image.uri}}
                            />
                        :
                            <Image
                                style={{width: 45, height: 45, resizeMode: 'contain', borderRadius: 250,  }}
                                source={ require('../../assets/avatar.png')}
                            />
                        }
                    </TouchableOpacity>

                    <TextInput
                        style={{width: '80%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft: windowWidth * 0.05, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setEmail(text)}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '3%'}} >
                    <TextInput
                        style={{width: '47%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft:0, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setNom(text)}
                        placeholder="Nom"
                        keyboardType="default"
                        autoCapitalize='none'
                    />
                
                    <TextInput
                        style={{width: '47%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft: 0, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setPrenom(text)}
                        placeholder="Prenom"
                        keyboardType="default"
                        autoCapitalize='none'
                    />

                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '3%'}} >
                    <TextInput
                        style={{width: '100%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft:0, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setAdresse(text)}
                        placeholder="Adresse"
                        keyboardType="default"
                        autoCapitalize='none'
                    />
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '3%'}} >
                    <TextInput
                        style={{width: '100%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft:0, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setTel(text)}
                        placeholder="Numero de Telephone"
                        keyboardType="numeric"
                        autoCapitalize='none'
                    />
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginTop: '3%'}} >
                    <TextInput
                        style={{width: '100%',borderWidth: 1, paddingLeft: "3%", borderRadius: 10, fontSize: 16, marginLeft:0, paddingVertical: "1%", borderColor: "#fff", color: "#fff"}}
                        placeholderTextColor="#fff"
                        onChangeText={(text)=> setPassword(text)}
                        placeholder="Password"
                        // keyboardType="default"
                        secureTextEntry={secure}
                        autoCapitalize='none'
                    />
                </View>

                
            </View>

            <Dialog
                isVisible={visible}
                onBackdropPress={() => setVisible(!visible)}

            >
                {/* <Dialog.Title title="Dialog Title"/> */}
                <View style={{ alignItems: 'center', alignContent: 'center', flexDirection: 'row', margin: 0}}>

                    <TouchableOpacity
                        style={{width: '50%', alignItems: 'center', alignContent: 'center'}}
                        onPress={pickFromGallery}
                    >
                        <Ionicons name='image-outline' size={40} />
                    </TouchableOpacity>
                    <View style={{height: 50, borderWidth: 0.5, borderColor: 'grey'}} />
                    <TouchableOpacity
                        style={{width: '50%', alignItems: 'center', alignContent: 'center'}}
                        onPress={pickFromCamera}
                    >
                        <Ionicons name='ios-camera-outline' size={40} />
                    </TouchableOpacity>
                </View>
            </Dialog>
            
            <TouchableOpacity
                style={{backgroundColor: '#63CCFF', width: windowWidth * 0.5, borderRadius: 5, paddingVertical: "2%", alignItems: 'center', alignSelf: 'center'}}
                onPress={submit}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontWeight: '300', color: "#fff"}}>Register</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: "2%"}}>
                <Text style={{color: "#fff"}}>If you already have an account </Text><TouchableOpacity
                 onPress={() => navigation.navigate('login')}
                ><Text style={{ color: "#63CCFF"}}>Log In</Text></TouchableOpacity>
            </View>
        </Animatable.View>
    </ScrollView>
  )
}

export default RegisterScreen