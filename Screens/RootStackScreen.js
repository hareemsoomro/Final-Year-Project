import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { exp } from 'react-native-reanimated';
import MainTabScreen from './MainTabScreen';

const RootStack= createStackNavigator();
const RootStackScreen = ({navigation})=>{
    return(
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <RootStack.Screen name="MainTabScreen" component={MainTabScreen} />
        </RootStack.Navigator>

    );}
    export default RootStackScreen;