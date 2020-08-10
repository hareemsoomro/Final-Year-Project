import React from 'react';
import { StyleSheet, Alert, Button, StatusBar, Image, TouchableOpacity, TextInput, Platform, Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/Context';
import Users from '../model/Users';


export default function SignInScreen({ navigation }) {

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword:true,

  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidEmail: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidEmail: false
        });
    }
}
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}
const handleValidUser = (val) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          isValidEmail: true
      });
  } else {
      setData({
          ...data,
          isValidEmail: false
      });
  }
}
const loginHandle = (userName, password) => {

  const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password;
  } );

  if ( data.username.length == 0 || data.password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  signIn(foundUser);
}

  return (

    <View style={styles.container}>
      <StatusBar backgroundColor='#43a047' barStyle="light-content" />
      {/* ============================================HEADER============================================ */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome !</Text>
      </View>
      {/* ============================================FOOTER============================================ */}
      <Animatable.View style={styles.footer} animation="fadeInUpBig" duraton="1500">

      {/* ============Email ============== */}
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#003300" size={20} />
          <TextInput placeholder="Your user name" style={styles.textInput}
            onChangeText={(val) => textInputChange(val)} 
            onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)} />
          {data.check_textInputChange ?
            <Feather name="check-circle" color="green" size={20} /> : null}
        </View>
        {/* =====validation Text======*/}
        {data.isValidEmail ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>username must be 4 characters</Text>
        </Animatable.View> 
        }
        {/* =====validation Text End======*/}

     {/* ============ Password============== */}

     
        <Text style={[styles.text_footer, { marginTop: 30 }]} >Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#003300" size={20} />
          <TextInput secureTextEntry={data.secureTextEntry ? true : false}
           placeholder="Your Password" style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)} />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
              <Feather name="eye-off" color="green" size={20} /> : <Feather name="eye" color="green" size={20} />}
          </TouchableOpacity>
        </View>
        {/* =====validation Text======*/}
        {data.isValidPassword ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>Password must be 8 character/numbers Long </Text>
        </Animatable.View> 
        }
        {/* =====validation Text End======*/}
        <View>

      {/* ============ Forget Password============== */}

          <TouchableOpacity>
            <Text style={{ color: '#43a047', marginTop: 15 }}>Forgot password? Clicl Here.</Text>
          </TouchableOpacity> 

      {/* ============Sign In Button============== */}
      
          {/* <TouchableOpacity onPress={() => { loginHandle(data.username, data.password) }}
            style={[styles.textSign, { marginTop: 30 }]} >
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity> */}
           <Text>  </Text>
          <Button color="#43a047" title="Sign In" 
         onPress={() => {loginHandle( data.username, data.password )}}  />  


      {/* ============Sign up Button============== */}
          
          {/* <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.textSign} >
            <Text style={styles.signIn}>Sign Up </Text>
          </TouchableOpacity> */} 
           <Text>  </Text>
          <Button color="#43a047" title="Sign Up" 
          onPress={() =>navigation.navigate('SignUpScreen')}  />  

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
    color: 'white',
    fontSize: 15,
  },
  textSign: {

    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#43a047',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
