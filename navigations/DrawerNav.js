import React, {useContext, } from 'react'
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { MainContext } from '../hooks/MainContext';

import MainNav from './MainNav';
import Medics from '../screens/Medics';
import AddMedic from '../screens/AddMedic';
import DrawerContent from '../screens/DrawerContent';

const Drawer = createDrawerNavigator();
const MainNavStack = createStackNavigator();
const MedicsStack = createStackNavigator();
const AddMedicStack = createStackNavigator();

const windowheight = Dimensions.get('window').height;
const windowWindth = Dimensions.get('window').width;



const DrawerNav = () => {

  // const {auth} = useContext(MainContext);
  return (
    <Drawer.Navigator
    // drawerContent={props => {<DrawerContent {...props}  />}}
        screenOptions={{
            headerShown: false,
            // headerTransparent: true,
            
        }}
    >
        <Drawer.Screen  name='Posts' component={MainNavStackScreen} />
        <Drawer.Screen  name='Medicament' component={MedicsStackScreen} />
        <Drawer.Screen  name='Ajout de medicament' component={AddMedickScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNav

const MainNavStackScreen = ({navigation}) => {
    
    const {auth} = useContext(MainContext);
    console.log(auth)
    return (
        <MainNavStack.Navigator screenOptions={{
            headerStyle:{
              // backgroundColor: '#80cbc4',
              height: windowheight * 0.08
            },
            headerTintColor: '#fff',
            headerTintStyle:{
              fontWeight: 'bold'
            },
            headerTransparent: true,
            headerTitle: '',
            
        
          }}>
              
            <MainNavStack.Screen name="HomeStack" component={MainNav} options={{
                headerLeft: () =>(
                  < TouchableOpacity style={{marginLeft: "10%"}} onPress={() =>navigation.openDrawer()} >
                  <Icon name="md-menu-sharp" size={30} color="#000"   />
                  </TouchableOpacity>
                ),
                headerRight: () =>(
                  <TouchableOpacity style={{marginRight: windowWindth *0.03, marginTop: windowheight * 0.01 }}  
                  >
                    <Image  
                      style={{width: windowWindth * 0.12, height: windowheight * 0.06, borderRadius: 150 }}
                      source={{ uri: `${path}/uploads/images/${auth.avatar}`}}
                    />
                  </TouchableOpacity>
                ),
              
            }} />
          </MainNavStack.Navigator>
    )
}



const MedicsStackScreen = ({navigation}) => {
    
    const {auth} = useContext(MainContext);
    console.log(auth)
    return (
        <MedicsStack.Navigator screenOptions={{
            headerStyle:{
              // backgroundColor: '#80cbc4',
              height: windowheight * 0.08
            },
            headerTintColor: '#fff',
            headerTintStyle:{
              fontWeight: 'bold'
            },
            headerTransparent: true,
            headerTitle: '',
            
        
          }}>
              
            <MedicsStack.Screen name="Medics" component={Medics} options={{
                headerLeft: () =>(
                    < TouchableOpacity style={{marginLeft: "10%"}} onPress={() =>navigation.openDrawer()} >
                    <Icon name="md-menu-sharp" size={30} color="#000"   />
                    </TouchableOpacity>
                ),
                headerRight: () =>(
                    <TouchableOpacity style={{marginRight: windowWindth *0.03, marginTop: windowheight * 0.01 }}  >
                        <Image  
                            style={{width: windowWindth * 0.12, height: windowheight * 0.06, borderRadius: 150 }}
                            source={{ uri: `${path}/uploads/images/${auth.avatar}`}}
                        />
                    </TouchableOpacity>
                ),
              
            }} />
          </MedicsStack.Navigator>
    )
}


const AddMedickScreen = ({navigation}) => {
    
    const {auth} = useContext(MainContext);
    console.log(auth)
    return (
        <AddMedicStack.Navigator screenOptions={{
            headerStyle:{
              // backgroundColor: '#80cbc4',
              height: windowheight * 0.08
            },
            headerTintColor: '#fff',
            headerTintStyle:{
              fontWeight: 'bold'
            },
            headerTransparent: true,
            headerTitle: '',
            
        
          }}>
              
            <AddMedicStack.Screen name="Medics" component={AddMedic} options={{
                headerLeft: () =>(
                    < TouchableOpacity style={{marginLeft: "10%"}} onPress={() =>navigation.openDrawer()} >
                    <Icon name="md-menu-sharp" size={30} color="#000"   />
                    </TouchableOpacity>
                ),
                headerRight: () =>(
                    <TouchableOpacity style={{marginRight: windowWindth *0.03, marginTop: windowheight * 0.01 }}  >
                        <Image  
                            style={{width: windowWindth * 0.12, height: windowheight * 0.06, borderRadius: 150 }}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}}
                        />
                    </TouchableOpacity>
                ),
              
            }} />
          </AddMedicStack.Navigator>
    )
}