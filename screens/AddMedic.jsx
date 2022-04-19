import React, {useState} from 'react'
import { View, Text, Modal, Alert,StyleSheet, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import mime from 'mime';

const AddMedic = ( {navigation}) => {
    const [title, setTitle]=useState("")
    const [qte, setQte]=useState("")
    const [deadline, setDeadline]=useState("")
    const [type, setType]=useState("")
    const [category, setCategory]=useState("")
    const [image, setImage]=useState({})
    const [modal, setModal]=useState(false)

    const pickFromGallery = async()=>{

        let data= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        // console.log(data);
        if(!data.cancelled){
          let newfile ={uri:data.uri, 
                        type:`test/${data.uri.split(".")[1]}`,
                        name:`test.${data.uri.split(".")[1]}`}
          handleUpload(newfile)
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
            // handleUpload()
        }

    } 

    const handleUpload=()=>{
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
        formData.append('nom', title);
        formData.append('qte', qte);
        formData.append('deadline', deadline);
        formData.append('type', type);
        formData.append('categorie', category);

        console.log (formData);
        // fetch("https://api.cloudinary.com/v1_1/dnlnbhq3t/image/upload",{
        //     method:"post",
        //     body:data
        // }).then(res=>res.json()).
        // then(data=>{
        //     setImage(data.url)
        //     setModal(false)
        // })
    }

    return (
        <View style={styles.AppContainer}>
            <ScrollView>
                <View style={styles.root}>
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
                    /> 
                    <TextInput 
                        label='Deadline'
                        style={styles.inputStyle}
                        value={deadline}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setDeadline(text)}
                    />
                    <TextInput 
                        label='Type'
                        style={styles.inputStyle}
                        value={type}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setType(text)}
                    /> 
                    <TextInput 
                        label='Category'
                        style={styles.inputStyle}
                        value={category}
                        mode='outlined'
                        theme={theme}
                        onChangeText={text => setCategory(text)}
                    /> 
                    <Button 
                        icon={image==""?"upload": "check"}
                        mode="contained" 
                        onPress={() => setModal(true)}
                        style={styles.inputStyle}
                        theme={theme}
                    >upload Image</Button>
                    <Button 
                        icon="content-save"
                        mode="contained" 
                        onPress={() => handleUpload()}
                        style={styles.inputStyle}
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
    margin:10
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
export default AddMedic