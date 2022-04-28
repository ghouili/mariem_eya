import React from 'react';
import { View, Text, StyleSheet,TextInput, StatusBar, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import { Card, FAB, Badge  } from 'react-native-paper'

const Card_detail = ({ title, image, id  }) => {
    return(
        <TouchableOpacity key={id} > 
            <Card style={styles.mycard} >
                {/* <Badge style={{ position: 'absolute', alignSelf: 'flex-end', backgroundColor: '#D9EAF7'}}  >{item.qte}</Badge> */}
                <View  style={styles.cardView}>
                    {/* <Image source={{ uri: `${path}/uploads/images/${image}`}} style={styles.image}/> */}
                    <View style={{ width: '100%', }}>

                    <Image source={ require('../assets/medicine.png') } style={styles.image}/>
                    </View>
                    <View style={styles.viewDesc}>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        {/* <Text numberOfLines={1} style={styles.desc}>{item.category}</Text> */}
                        {/* <Text numberOfLines={1} style={styles.desc}>{item.type}</Text> */}
                        {/* <Text numberOfLines={1} style={styles.desc}>{item.deadline}</Text> */}
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default Card_detail

const styles = StyleSheet.create({
    viewDesc:{
        // paddingTop: 7,
        // marginLeft:10,
        // fontSize:20,
        width: '100%',
    },
    title:{
        alignSelf: 'center',
        fontWeight:'600',
        fontSize:16
    },
    desc:{
        fontWeight:'600',
        fontSize:10
    },
    mycard:{
        // justifyContent: 'center',
        borderRadius: 5,
        padding: 3,
        // height: 100,
    },
    cardView:{
        // flexDirection:'row',
        padding:6

    },
    image :{
        width:60,
        height:60,
        alignSelf: 'center',
        
    }, 
})