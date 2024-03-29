import React from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { Avatar, Image, Title, Caption,Paragraph, Text, Drawer, TouchableRipple,Switch } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../components/Context';

export function DrawerContent(props){
    const [IsDarkTheme,SetIsDarkTheme]=React.useState(false);
    const { signOut  } = React.useContext(AuthContext);
    const toggleTheme=()=>{
        SetIsDarkTheme(!IsDarkTheme);
    }
    return(
    <View style={{flex:1}} >
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:"row" , marginTop:15}}>
                    <Avatar.Image
                            source={{uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'}}
                       size={50} />
                       <View style={{marginLeft:10}} >
                           <Title style={styles.title} >Hareem Soomro</Title>
                           <Caption style={styles.caption}>soomro@gmail.com</Caption>
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
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem 
            icon={({color,size}) => (
                < Icon name="home-outline"
                color={color}
                size={size} />
            ) }
            label="Home"
            onPress={()=>{props.navigation.navigate('Home')}} />
            <DrawerItem 
            icon={({color,size}) => (
                < Icon name="account-outline"
                color={color}
                size={size} />
            ) }
            label="Profile"
            onPress={()=>{props.navigation.navigate('Profile')}} />
            <DrawerItem 
            icon={({color,size}) => (
                < Icon name="bookmark-outline"
                color={color}
                size={size} />
            ) }
            label="FAQ"
            onPress={()=>{props.navigation.navigate('FAQ')}} />
            <DrawerItem 
            icon={({color,size}) => (
                < Icon name="settings-outline"
                color={color}
                size={size} />
            ) }
            label="Settings"
            onPress={()=>{props.navigation.navigate('Setting')}} />
            <DrawerItem 
            icon={({color,size}) => (
                < Icon name="account-check-outline"
                color={color}
                size={size} />
            ) }
            label="Support"
            onPress={()=>{props.navigation.navigate('Support')}} />
                </Drawer.Section>
            <Drawer.Section title="Preferences">
                <TouchableRipple onPress={()=> {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                   <View pointerEvents='none'>
                   <Switch value={IsDarkTheme}/>
                   </View>
                    </View>
                </TouchableRipple>

            </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
            icon={({color,size}) => (
                < Ionicons name="md-exit"
                color={color}
                size={size} />
            ) }
            label="Sign Out"
            onPress={()=>{signOut()}} />

            

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
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });