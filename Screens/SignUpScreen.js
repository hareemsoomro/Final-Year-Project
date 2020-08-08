import React from 'react';
import { StyleSheet,Button,StatusBar,Image, TouchableOpacity,TextInput,Platform, Text, View ,Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
export default function SignInScreen({ navigation }) {

  const [data,setData]=React.useState({
    email:'',
    password:'',
    confirm_password:'',
    check_textInputChange:false,
    secureTextEntry:true,
    confirm_secureTextEntry:true

  })
  const textInputChange=(val)=>{
    if(val.lenght =! 0)
    {
      setData({
        ...data,
        email:'val',
        check_textInputChange:true
      });
    } else {
      setData({
        ...data,
        email:'val',
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
  const updateConfirmSecureTextEntry =()=>{
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    });
  }
  const handlePasswordChange=(val)=>{
    setData({
      ...data,
      password:val
    });}
    const handleConfirmPasswordChange=(val)=>{
      setData({
        ...data,
        cpnfirm_password:val
      });}

  
  return (

      <View style={styles.container}>
                  <StatusBar backgroundColor='#009387' barStyle="light-content"/>

        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now ! !</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig"
                duraton="1500">
                   {/* --email-- */}
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#003300" size={20}/>
            <TextInput placeholder="Your Email" style={styles.textInput } 
            onChangeText={(val)=>textInputChange(val)} />
            {data.check_textInputChange ?
            <Feather name="check-circle" color="green" size={20} /> :null}
          </View>
                             {/* --Password-- */}

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
                             {/* --Confirm Password-- */}

          <Text style={[styles.text_footer,{ marginTop:30 }]} >Confirm Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#003300" size={20}/>
            <TextInput secureTextEntry= {data.confirm_secureTextEntry ?true:false} placeholder="Confirm Your Password" style={styles.textInput } 
            onChangeText={(val)=>handleConfirmPasswordChange(val)}/>
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? 
            <Feather name="eye-off" color="green" size={20} /> :<Feather name="eye" color="green" size={20} />}
            </TouchableOpacity>
          </View>



          <View>
          <TouchableOpacity onPress={{}} 
              style={[styles.textSign,{ marginTop:30 }]} >
                      <Text style={styles.signIn}>Sign Up</Text>
                      
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} 
              style={styles.textSign} >
                      <Text style={styles.signIn}>Sign In </Text>
                      
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
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
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
