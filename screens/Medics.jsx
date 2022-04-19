import React, {useState } from 'react'
import { View, Text, StyleSheet,TextInput, StatusBar, Image, Dimensions, FlatList} from 'react-native'
import { Card, FAB, Badge  } from 'react-native-paper'

import Card_detail from '../components/Card_detail';

const {width} = Dimensions.get('window');

const Medics = (props) => {

    const data = [
      {id:1, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
      {id:2, nom:"Doliprane", categorie:"Produit paramédical", Deadline:"08-10-2029", qte: 5, type: "pills"},
      {id:3, nom:"Doliprane", categorie:"Médicament", Deadline:"10-02-2025", qte: 5, type: "pills"},
      {id:4, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
      {id:5, nom:"Doliprane", categorie:"help", Deadline:"01-06-2023", qte: 5, type: "pills"},
      {id:6, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
      {id:7, nom:"Doliprane", categorie:"force", Deadline:"01-06-2023", qte: 5, type: "pills"},
      {id:8, nom:"Doliprane", categorie:"mecforce", Deadline:"01-06-2023", qte: 5, type: "pills"},
  
  
    ]
    const [filterData, setfilterData] = useState(data);
    const [masterData, setmasterData] = useState(data);
    const [search, setsearch] = useState('');
    
    const searchFilter = (text) => {
        if(text) {
            const NewData = masterData.filter((item) => {
                const itemData = item.categorie ? item.categorie.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(NewData);
            setsearch(text);
        } else {
            setfilterData(masterData);
            setsearch(text);
        }
    }

// const renderList = ((item)=>{
//      return(
//         <Card style={styles.mycard} >
//             <Badge style={{ position: 'absolute', alignSelf: 'flex-end', backgroundColor: '#D9EAF7'}}  >{item.qte}</Badge>
//             <View  style={styles.cardView}>
//                 <Image source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}} style={styles.image}/>
//                 <View style={styles.viewDesc}>
//                     <Text numberOfLines={1} style={styles.desc}>{item.nom}</Text>
//                     {/* <View style={{flexDirection: 'row', justifyContent: "space-between", width: '100%'}}><Text numberOfLines={1} style={styles.desc}>{item.nom}</Text><Badge>3</Badge></View> */}
//                     <Text numberOfLines={1} style={styles.desc}>{item.categorie}</Text>
//                     <Text numberOfLines={1} style={styles.desc}>{item.type}</Text>
//                     <Text numberOfLines={1} style={styles.desc}>{item.Deadline}</Text>
//                 </View>
//             </View>
//         </Card>
//   )
// })

  return (
    <View style={styles.container}>
        <View style={styles.SearchInputContainer}>
            <TextInput 
                style={styles.searchInput} 
                placeholder='Search here...'
                onChangeText={(text) => searchFilter(text)}
            ></TextInput>
        </View>
        <FlatList 
            data={filterData}
            renderItem={({item})=>{
                // return renderList(item)
                return ( <Card_detail item={item}  /> )
            }}
            keyExtractor={item=>`${item.id}`}
        />
        <FAB style={styles.fab}
            small={false}
            icon="plus"
            onPress={()=>props.navigation.navigate('Ajout de medicament')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal:15,
        backgroundColor:'#f7f3f3',
        flex:1,
    },
    SearchInputContainer:{
        backgroundColor:'white',
        width:'90%',
        alignSelf: 'center',
        height:50,
        borderRadius:8,
        justifyContent:'center',
        margin:5,
        marginTop: 45,
    },
    searchInput:{
        paddingLeft:8,
        fontSize:16
    },
    CardContainer:{
        width:360,
        marginRight:15,
        height:200,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginVertical:15

    },
    image :{
        width:100,
        height:100,

    }, 
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
      fab:{
        position:'absolute',
        margin:10,
        right:0,
        bottom:0,
         backgroundColor:'black'
      }
})
export default Medics