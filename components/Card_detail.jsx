import React from 'react';
import { View, Text, StyleSheet,TextInput, StatusBar, Image, Dimensions, FlatList} from 'react-native'
import { Card, FAB, Badge  } from 'react-native-paper'

const Card_detail = ({ item }) => {
    return(
        <Card style={styles.mycard} >
            <Badge style={{ position: 'absolute', alignSelf: 'flex-end', backgroundColor: '#D9EAF7'}}  >{item.qte}</Badge>
            <View  style={styles.cardView}>
                <Image source={{ uri: `${path}/uploads/images/${item.image}`}} style={styles.image}/>
                <View style={styles.viewDesc}>
                    <Text numberOfLines={1} style={styles.desc}>{item.title}</Text>
                    {/* <View style={{flexDirection: 'row', justifyContent: "space-between", width: '100%'}}><Text numberOfLines={1} style={styles.desc}>{item.nom}</Text><Badge>3</Badge></View> */}
                    <Text numberOfLines={1} style={styles.desc}>{item.category}</Text>
                    <Text numberOfLines={1} style={styles.desc}>{item.type}</Text>
                    <Text numberOfLines={1} style={styles.desc}>{item.deadline}</Text>
                </View>
            </View>
        </Card>
    )
}

export default Card_detail

const styles = StyleSheet.create({
    viewDesc:{
        // paddingTop: 7,
        marginLeft:10,
        fontSize:20,
    },
    desc:{
        fontWeight:'600',
        fontSize:16
    },
    mycard:{
        margin:5,
    },
    cardView:{
        flexDirection:'row',
        padding:6

    },
    image :{
        width:100,
        height:100,

    }, 
})