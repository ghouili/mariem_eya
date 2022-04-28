import React, {useState, useEffect } from 'react'
import { View, Text, StyleSheet,TextInput, StatusBar, Image, Dimensions, FlatList, ScrollView} from 'react-native'
import { Card, FAB, Badge  } from 'react-native-paper'
import axios from 'axios';
import Card_detail from '../components/Card_detail';
import Card_Medic from '../components/Card_Medic';
const {width} = Dimensions.get('window');

const Medics = (props) => {

    // const data = [
    //   {id:1, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
    //   {id:2, nom:"Doliprane", categorie:"Produit paramédical", Deadline:"08-10-2029", qte: 5, type: "pills"},
    //   {id:3, nom:"Doliprane", categorie:"Médicament", Deadline:"10-02-2025", qte: 5, type: "pills"},
    //   {id:4, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
    //   {id:5, nom:"Doliprane", categorie:"help", Deadline:"01-06-2023", qte: 5, type: "pills"},
    //   {id:6, nom:"Doliprane", categorie:"Médicament", Deadline:"01-06-2023", qte: 5, type: "pills"},
    //   {id:7, nom:"Doliprane", categorie:"force", Deadline:"01-06-2023", qte: 5, type: "pills"},
    //   {id:8, nom:"Doliprane", categorie:"mecforce", Deadline:"01-06-2023", qte: 5, type: "pills"},
  
  
    // ]

    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
    
    const fetchdata = async () => {

        let response = await fetch(`${path}/produit`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json"
            
            }
        });

        let result = await response.json();
        if (result.message === "success") {
            setmasterData(result.data);
            setfilterData(result.data);
        }
    }


    useEffect(() => {
        fetchdata();
    }, [])
    

    const searchFilter = (text) => {
        if(text) {
            const NewData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
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

  return (
    <ScrollView style={styles.container}>
        <View style={styles.SearchInputContainer}>
            <TextInput 
                style={styles.searchInput} 
                placeholder='Search here...'
                onChangeText={(text) => searchFilter(text)}
            ></TextInput>
        </View>
        <View style={{  display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

            {filterData.map(({image, _id, title}, idx)=> {
                return (
                    <View key={idx}>
                        <Card_Medic  image={image} title={title} id={_id} />
                    </View>
                )
            })}
        </View>
        {/* <FlatList 
            data={filterData}
            renderItem={({item, i})=>{
                // return renderList(item)
                return ( <Card_detail  item={item}  /> )
            }}
            keyExtractor={item=>`${item._id}`}
        /> */}
        {/* <FAB style={styles.fab}
            small={false}
            icon="plus"
            onPress={()=>props.navigation.navigate('Ajout de medicament')}
        /> */}
    </ScrollView>
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