import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View,ActivityIndicator, Button } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'
import ProfileScreen from './Screens/ProfileScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MainTabScreen from './Screens/MainTabScreen';
import SupportScreen from './Screens/SupportScreen';
import FAQ from './Screens/FAQ';
import SettingScreen from './Screens/SettingScreen';
import {DrawerContent} from './Screens/DrawerContent';
import RootStackScreen from './Screens/RootStackScreen';
import { AuthContext} from './components/Context'
import AsyncStorage from '@react-native-community/async-storage';

const drawer=createDrawerNavigator();

const App=()=> { 
 // const [isLoading,setISLoading]=React.useState(true);
 // const [userToken,setUserToken]=React.useState(false);
 const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};
const loginReducer = (prevState, action) => {
  switch( action.type ) {
    case 'RETRIEVE_TOKEN': 
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN': 
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGOUT': 
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
    case 'REGISTER': 
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
  }
};
const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext=React.useMemo(()=> ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
      
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    // setUserToken('random')
     //(false);
    },
  }));

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);
  // this is loading screen
  if(loginState.isLoading){
    return(
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size="large"/><Text>loading</Text>
      </View>
    )
  }
  return (
    <AuthContext.Provider  value ={authContext}>
    <NavigationContainer>
      {loginState.userToken != null ? (
        <drawer.Navigator drawerContent={props=> <DrawerContent {...props} />} >
           <drawer.Screen name="Home" component={MainTabScreen} />
           <drawer.Screen name="Support" component={SupportScreen} />
           <drawer.Screen name="Setting" component={SettingScreen} />
           <drawer.Screen name="FAQ" component={FAQ} /> 
      </drawer.Navigator>
      ): 
      <RootStackScreen />}
    
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
