import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import FisrstVisit from './FirstVisit'
import SecondtVisit from './SecondVisit'
import ThirdtVisit from './ThirdVisit'
import FourthVisit from './FourthVisit'
import FifthVisit from './FifthVisit'
import SixthVisit from './SixthVisit'
import Booking from './Booking'
import FAQ from './FAQ'
import Settings from './SettingScreen'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FirstVisit from './FirstVisit';

const HomeStack= createStackNavigator();
const DetailStack= createStackNavigator();
const Tab= createMaterialBottomTabNavigator();

const MainTabScreen=()=>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#005005"
     // style={{ backgroundColor: 'red' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#4c8c4a',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#4c8c4a',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#4c8c4a',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#4c8c4a',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);
export default MainTabScreen;
const HomeStackScreen =({navigation})=>(
    <HomeStack.Navigator screenOptions={{ headerStyle:{backgroundColor:"#66bb6a"}}}>
      <HomeStack.Screen name="Home" component={HomeScreen}
      
      options={{
        headerLeft:()=>(
          <Ionicons.Button name="ios-menu" size={32} backgroundColor="#66bb6a" onPress={()=> navigation.openDrawer()}>
          </Ionicons.Button>
        )
      }}
       />
       <HomeStack.Screen name="Details" component={DetailScreen}/>
       <HomeStack.Screen name="FAQ" component={FAQ} />
       <HomeStack.Screen name="FirstVisit" component={FirstVisit}/>
       <HomeStack.Screen name="SecondVisit" component={SecondtVisit}/>
       <HomeStack.Screen name="ThirdVisit" component={ThirdtVisit}/>
       <HomeStack.Screen name="FourthVisit" component={FourthVisit}/>
       <HomeStack.Screen name="FifthVisit" component={FifthVisit}/>
       <HomeStack.Screen name="SixthVisit" component={SixthVisit}/>
       <HomeStack.Screen name="Booking" component={Booking}/>
       <HomeStack.Screen name="settings" component={Settings}/>
    </HomeStack.Navigator>
);
const DetailStackScreen =({navigation})=>(
  <DetailStack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#66bb6a'}}} >
    <DetailStack.Screen name="Details" component={DetailScreen} 
    options={{
      headerLeft:()=>(
        <Ionicons.Button name="ios-menu" 
        size={32} backgroundColor="#66bb6a"
         onPress={()=> navigation.openDrawer()}>
        </Ionicons.Button>
      )
    }}/>
  </DetailStack.Navigator>
);
