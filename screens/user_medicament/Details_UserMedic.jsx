import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image, Dimensions, TouchableOpacity   } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';  
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card} from 'react-native-shadow-cards';

import Ionicons from 'react-native-vector-icons/Ionicons';

const WindowHeight = Dimensions.get('window').height;
const WindowWidth = Dimensions.get('window').width;

const Details_UserMedic = ({ route, navigation }) => {

    let { id } = route.params;
    // let id = '626aa21b47bd7eda0ae7ccfe';
    const [data, setData] = useState({
        title: '',
        qte: '',
        type: '',
        category: '',
        deadline: '',
        image: '',
        userid: '',
        _id: '',
    });

    const fetchData = async () => {

        let result = await fetch(`${path}/produit/${id}`);

        let resultData = await result.json();
        // console.log('id sent : ' + route.params.id);

        if (resultData.success === true ){
            setData(resultData.data)
        } else {
            Alert.alert(
                'ERROR',
                resultData.message,
                [{ text: 'fermer' }]
            );
        }

    }

    useEffect(() => {

        fetchData();
    }, [])

  return (
    <View style={{flex: 1, paddingTop: WindowHeight * 0.11}}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#248DE7', 'transparent']}
            style={styles.background}
        />

        <Card style={{width: '90%', marginHorizontal: '5%',  padding: '5%' }} >
            <TouchableOpacity
                style={{alignItems: 'flex-start', paddingHorizontal: "5%", paddingVertical: "3%", position: 'absolute'}}
                onPress={() => navigation.push('Medics')}
            >
                <Ionicons name='arrow-back-circle-outline' size={35} color='#000' />
            </TouchableOpacity>
            <View style={{ width: '100%', display: 'flex', marginBottom: 10 }} >
                <Text style={{fontSize: 25, fontWeight: '600',alignSelf: 'center' }}>{data.title}</Text>
            </View>
            <Image
                style={{ width: '80%', height: 200, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center', marginBottom: 10}}
                source={{ uri:`${path}/uploads/images/${data.image}`}}
            />
            <View style={{ width: '100%', display: 'flex',  }} >

                <Text style={{fontSize: 20, fontWeight: '600', alignSelf: 'flex-end', color: 'red'}}>{data.deadline}</Text>
                <Text style={{fontSize: 20, fontWeight: '600'}}>{data.qte} paquet</Text>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#494B4C'}}>Type: </Text>
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 10}}>{data.type}</Text>
                <Text style={{fontSize: 20, fontWeight: '600', color: '#494B4C'}}>Category: </Text>
                <Text style={{fontSize: 20, fontWeight: '600', marginLeft: 10}}>{data.category}</Text>
            </View>
        </Card>
    </View>
  )
}

export default Details_UserMedic;

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: WindowHeight ,
    },
})