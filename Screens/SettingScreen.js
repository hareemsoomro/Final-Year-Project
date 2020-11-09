import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar,TouchableOpacity, Text, View ,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  List, ListItem, Icon, Left, Body,  Right, Switch ,Button } from 'native-base';

import * as Animatable from 'react-native-animatable';
import { Thumbnail } from 'native-base';
export default class SettingScreen extends Component {
render(){
  return (

      <View style={styles.container}>
 <View style={styles.header}>
          
              <Text style={styles.title}>My Profile</Text>
        </View>

        <Animatable.View animation="fadeInUpBig"
           style={styles.footer}>
             <View style={styles.icons}>
             < Ionicons  name="account-child-circle"
                color='#338a3e'
                size={115} /> 
             </View>
              
              
              <Text style={styles.title}>User Name Here </Text>
             
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#338a3e" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text>Hareem Soomro</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#338a3e" }}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>soomrohareem@gmail.com</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#338a3e" }}>
                <Icon active name="contact" />
              </Button>
            </Left>
            <Body>
              <Text>03219876543</Text>
            </Body>
          </ListItem>
        
 
          </Animatable.View>
            
      </View>
  );
}}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#E1E2E1',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 30,
      paddingHorizontal: 30
  },
    buttons:{
        top:10,
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    title: {
      color: '#1B5E20',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop:10,
      marginBottom:10
  },
  icons:{
    alignItems:'center',
    marginTop:-84
  }
})