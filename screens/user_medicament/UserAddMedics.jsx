import React, {useState, useContext} from 'react'
import { View, Text, Modal, Alert, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TextInput, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import mime from 'mime';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import axios from 'axios';

import {MainContext} from '../../hooks/MainContext';


const today = new Date();

const UserAddMedics = ( {navigation}) => {

    const { auth } = useContext(MainContext);
    console.log('====================================');
    console.log(auth);
    console.log('====================================');
    const [title, setTitle]=useState("")
    const [qte, setQte]=useState("")
    const [deadline, setDeadline]=useState("")
    const [type, setType]=useState("")
    const [category, setCategory]=useState("")
    const [image, setImage]=useState(null);
    const [modal, setModal]=useState(false)

    const [date, setDate] = useState(today);

    const [show, setShow] = useState(false);
    const [selectedValue, setSelectedValue] = useState("cardio");

    // affiche data picker :: //////////////////////////////////////////////
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log(moment(date).format('DD/MM/YYYY'));
    };
  
      
  
    const showDatepicker = () => {
        setShow(true);
    };


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
            setModal(false)
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
            setImage(data)
            setModal(false);
            // handleUpload()
        }

    } 

    const handleUpload= async()=>{
        // const data = new FormData()
        // data.append('file', image )
        // data.append('upload_preset', 'paramedicsApp')
        // data.append('cloud_name', "dnlnbhq3t")

        const fileUri = image.uri;
        const newImageUri = "file:///" + fileUri.split("file:/").join("");
        
        const formData = new FormData();
        
        formData.append("image", {
            uri: newImageUri,
            type: mime.getType(newImageUri),
            name: newImageUri.split("/").pop(),
        });
        formData.append('title', title);
        formData.append('qte', qte);
        formData.append('deadline', moment(date).format('DD/MM/YYYY'));
        formData.append('type', type);
        formData.append('category', selectedValue);
        formData.append('userid', auth._id);

        // console.log (formData);
        // let response = await axios.post(`${path}/produit/add`, formData);

        // console.log(response.data);
        let response = await fetch(`${path}/produit/add`,{
            method:"POST",
            headers: {
                Accept: "application/json",
            "Content-Type": "multipart/form-data",
            },
            body:formData
        });

        let result = await response.json();
        console.log(result);

        if (result.success === true){
            Alert.alert("Success", result.message, [
                { text: "fermer" },
            ]);

            setImage(null);
            setTitle('');
            setQte('');
            setDate(new Date());
            setType('');
            setCategory('');

            navigation.push('Medics');
        } else {
            Alert.alert("Error", result.message, [
                { text: "fermer" },
            ]);
        }
    }

    return (
        <View style={styles.AppContainer}>
            <ScrollView>
                <View style={styles.root}>

                    {image && (
                        <Image
                            style={{ width: '80%', height: 250, resizeMode: 'contain', borderRadius: 5, alignSelf: 'center'}} 
                            source={{ uri: image.uri}}
                        />
                    )}
                    <TextInput 
                        label='Title'
                        style={styles.inputStyle}
                        value={title}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setTitle(text)}
                    />

                    <TextInput 
                        label='Quantity'
                        style={styles.inputStyle}
                        value={qte}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setQte(text)}
                        keyboardType='number-pad'
                    /> 
                    {/* <TextInput 
                        label='Deadline'
                        style={styles.inputStyle}
                        value={deadline}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setDeadline(text)}
                    /> */}

                    <TouchableOpacity 
                        style={{width: '100%', flexDirection: 'row', color: "#383838", alignItems: 'center', marginLeft: 8 }}
                        onPress={showDatepicker}
                    >
                        {/* <Text style={{ fontSize: 18, color: "#383838"}} >{moment(date).format('DD/MM/YYYY')}</Text> */}
                        <TextInput 
                            label='Expiring Date'
                            style={{width: '40%', padding: 0, height: 30, marginRight: 5}}
                            value={moment(date).format('DD/MM/YYYY')}
                            mode='outlined'
                            theme={theme}
                            editable={false}
                            keyboardType='default'

                        /> 
                        <AntDesign name='calendar' size={35} color='#383838' />
                    </TouchableOpacity>
                    {show && (
                        <DateTimePicker
                        // testID="dateTimePicker"
                        value={date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                    <TextInput 
                        label='Type'
                        style={styles.inputStyle}
                        value={type}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setType(text)}
                    /> 
                    {/* <TextInput 
                        label='Category'
                        style={styles.inputStyle}
                        value={category}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setCategory(text)}
                    />  */}
                    <View style={{}}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 160 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            mode='dropdown'
                        >
                            <Picker.Item label="Cardio" value="cardio" />
                            <Picker.Item label="Antiviraux" value="cntiviraux" />
                            <Picker.Item label="Dermatologie" value="cermatologie" />
                            <Picker.Item label="Antiinflamatoire" value="cntiinflamatoire" />
                        </Picker>
                        </View>
                    <Button 
                        icon={image==""?"upload": "check"}
                        mode="contained" 
                        onPress={() => setModal(true)}
                        style={{ margin: 10}}
                        theme={theme}
                    >upload Image</Button>
                    <Button 
                        icon="content-save"
                        mode="contained" 
                        onPress={() => handleUpload()}
                        style={{ margin: 10}}
                        theme={theme}
                    >save</Button>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal}
                        onRequestClose={()=>{
                            setModal(false)
                        }}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalButtonView}>
                                <Button 
                                    icon="camera"  
                                    mode="contained" 
                                    onPress={() => pickFromCamera()}
                                    theme={theme}
                                >Camera</Button>
                                <Button 
                                    icon="image-area" 
                                    mode="contained"
                                    onPress={() => pickFromGallery()}
                                    theme={theme}
                                >Gallery</Button>
                            </View>
                            <Button 
                                theme={theme}
                                onPress={() => setModal(false)}
                            >Cancel</Button>

                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </View>
    )
}
const theme={
  colors:{
    primary:"black"
  }
}
const styles=StyleSheet.create({
  root:{
    flex:1
  },
  inputStyle:{
    margin:10,
    height: 35
  },
AppContainer:{
  flex:1,
  backgroundColor:'#f7f3f3',
  paddingTop: 60
}, 
modalButtonView:{
  flexDirection:"row",
  justifyContent:'space-around',
  padding:10,
},
modalView:{
  position:'absolute',
  bottom:2,
  width:"100%",
  backgroundColor:"white"

}
})
export default UserAddMedics