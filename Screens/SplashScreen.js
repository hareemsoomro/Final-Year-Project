import React from 'react';
import { StyleSheet,Button,Image, StatusBar,TouchableOpacity, Text, View ,Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({ navigation }) {
  return (

      <View style={styles.container}>
        <StatusBar backgroundColor='#43a047' barStyle="light-content"/>
          <View style={styles.header}>
            
              <Animatable.Image animation="bounceInDown"
                duraton="1500"
               source={require('../assets/logo.png')}
               style={styles.logo}
               resizeMode="stretch"
                />
                <Text style={styles.title}>E-VACCINE</Text>
          </View>
          <Animatable.View animation="fadeInUpBig"
           style={styles.footer}>
              <Text style={styles.title}>Spare the children, Give the vaccine. </Text>
              <Text style={styles.text} >Sign In With Account !</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')} 
              style={styles.textSign} >
                      <Text style={styles.signIn}>Get Started </Text>
                      <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
              </TouchableOpacity>

          </Animatable.View>
      </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#98ee99'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#1B5E20',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
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