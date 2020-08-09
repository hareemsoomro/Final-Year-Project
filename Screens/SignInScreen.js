import React from 'react';
import { StyleSheet,Button,StatusBar,Image, TouchableOpacity,TextInput,Platform, Text, View ,Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import {AuthContext} from '../components/Context';

export default function SignInScreen({ navigation }) {

  const [data,setData]=React.useState({
    username:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry:true,

  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange=(val)=>{
    if(val.lenght =! 0)
    {
      setData({
        ...data,
        username:'val',
        check_textInputChange:true
      });
    } else {
      setData({
        ...data,
        username:'val',
        check_textInputChange:false
      });
    }
  }
  const updateSecureTextEntry =()=>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }
  
  const handlePasswordChange=(val)=>{
    setData({
      ...data,
      password:val
    });

  }
  const loginHandle =(username,password)=>{
    signIn(username,password);
  } 
  return (

      <View style={styles.container}>
                  <StatusBar backgroundColor='#43a047' barStyle="light-content"/>

        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome !</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig"
                duraton="1500">
          <Text style={styles.text_footer}>username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#003300" size={20}/>
            <TextInput placeholder="Your username" style={styles.textInput } 
            onChangeText={(val)=>textInputChange(val)} />
            {data.check_textInputChange ?
            <Feather name="check-circle" color="green" size={20} /> :null}
          </View>
          <Text style={[styles.text_footer,{ marginTop:30 }]} >Password</Text>

          <View style={styles.action}>
            <Feather name="lock" color="#003300" size={20}/>
            <TextInput secureTextEntry= {data.secureTextEntry?true:false} placeholder="Your Password" style={styles.textInput } 
            onChangeText={(val)=>handlePasswordChange(val)}/>
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? 
            <Feather name="eye-off" color="green" size={20} /> :<Feather name="eye" color="green" size={20} />}
            </TouchableOpacity>
        
          </View>
          <View>
          <TouchableOpacity>
                <Text style={{color: '#43a047', marginTop:15}}>Forgot password? Clicl Here.</Text>
            </TouchableOpacity>

          <TouchableOpacity onPress={()=>{loginHandle(data.username,data.password)}} 
              style={[styles.textSign,{ marginTop:30 }]} >
                      <Text style={styles.signIn}>Sign In</Text>
                      
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')} 
              style={styles.textSign} >
                      <Text style={styles.signIn}>Sign Up </Text>  
              </TouchableOpacity>

              </View>
        </Animatable.View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#98ee99'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#003300',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#424242',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50,
  },
  signIn: {
    color:'white',
    fontSize:15,
  },
  textSign: {
      
     color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#43a047',
     padding:10,
      marginTop: 10,
      borderRadius:20,
      flexDirection:'row',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center'
  }
});
