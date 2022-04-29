import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';


const windowwidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const donation = {
  _id: "625fdb10b25e296df16c4f26",
  etape_01: true,
  etape_02: true,
  title: "Doliprane ",
  qte: "2",
  type: "Médicament ",
  category: "Autres",
  deadline: "20/04/2026",
  image: "7f797560-c091-11ec-aa06-99b9cb32c1de.jpeg",
  __v: 0
};

const DonateScreen = () => {

  let color_etape1 = 'grey';
  let color_etape2 = 'grey' ;

  if (donation.etape_01 === true) {
    color_etape1 = 'green';
    
  } else if (donation.etape_01 === false) {
    color_etape1 = 'red';

  }

  if (donation.etape_02 === true) {
    color_etape2 = 'green';
    
  } else if (donation.etape_02 === false) {
    color_etape2 = 'red';

  }
  //  color_etape1 = 'grey';
  //  color_etape2 = 'grey';
  
  return (
    <View style={{flex: 1, paddingTop: windowheight * 0.1}}>
      <LinearGradient
            // Background Linear Gradient
            colors={['#248DE7', 'transparent']}
            style={styles.background}
        />
      <View style={{paddingHorizontal: 20}}>
        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 2}}>
          <View style={{width: 30, height: 30, borderWidth: 1, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 5, borderColor: color_etape1}}>
            <Text style={{fontSize: 20, color: color_etape1}}>01</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: color_etape1}} >Confirmation premier ..</Text>
          </View>
        </View>

        <View style={{borderWidth: 1, height: 50, width: 0, marginLeft: 13, borderColor: color_etape1}} />

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <View style={{width: 30, height: 30, borderWidth: 1, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 5, borderColor: color_etape2}}>
            <Text style={{fontSize: 20, color: color_etape2}}>02</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: color_etape2}} >Confirmation final ..</Text>
          </View>
        </View>

        <View style={{borderWidth: 1, height: 50, width: 0, marginLeft: 13, borderColor: color_etape2}} />

        {/* <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <View style={{width: 30, height: 30, borderWidth: 1, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
            <Entypo name='check' size={20} color='green' />
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'green'}} >Thanks for your donation</Text>
          </View>
        </View> */}
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2}}>
          <View style={[{width: 30, height: 30, borderWidth: 1, borderRadius: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: 5, }, {borderColor: 'grey'}]}>
          <Text style={{fontSize: 20, marginTop: -10, color: 'grey'}}>...</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'grey'}} >En cour de traitement </Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default DonateScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: windowheight ,
},
})