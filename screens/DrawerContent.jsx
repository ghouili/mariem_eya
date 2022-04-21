import React, {useEffect, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme, 
    Avatar, 
    Title, 
    Caption, 
    Paragraph, 
    Drawer, 
    Text, 
    TouchableRipple, 
    Switch 
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';



   
export function DrawerContent(props) {





    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                            source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg'}}
                            size={50}
                            />
                            <View style={{marginLeft: 15,flexDirection:'column'}}>
                                <Title style={styles.title}>name : </Title>
                                <Caption style={styles.caption}>user name</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
        </View>
        <View style={{borderWidth: 0.5, marginHorizontal: 0, marginTop: 10, borderTopColor: '#f4f4f4',}}></View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )} 
                            label="Home"
                            // onPress={() =>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color,size}) =>(
                                <Ionicons
                                name="md-person-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            // onPress={() =>{props.navigation.navigate('Profile')}}
                        />
                        {/* <DrawerItem
                            icon={({color,size}) =>(
                                <AntDesign
                                name="contacts"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contct us"
                            onPress={() =>{props.navigation.navigate('Contact')}}
                        /> */}
                        {/* <DrawerItem
                            icon={({color,size}) =>(
                                <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="details"
                            onPress={() =>{props.navigation.navigate('details')}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>(
                                <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                                />
                                )}
                            label="Bookmarks"
                            onPress={() =>{props.navigation.navigate('Contact')}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>(
                                <Icon
                                name="cog-outline"
                                color={color}
                                size={size}
                                />
                                )}
                            label="Settings"
                            onPress={() =>{props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) =>(
                                <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() =>{props.navigation.navigate('SupportScreen')}}
                            /> */}
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                    
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) =>(
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    // onPress={() =>{auth.logout()}}
                />
            </Drawer.Section>
            
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})

export default DrawerContent;