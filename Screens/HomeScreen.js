import React from 'react';
import { StyleSheet,Button, Text,  Image ,View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.body}>
     {/*================= S L I D E R==================================================================================================================== */}
     

    <View style={styles.sliderContainer}> 
     <Swiper height={200} horizontal={false} autoplay activeDotColor='#98ee99' >
     <View style={styles.slide} >
         <Image
           source={require('../assets/v4.jpg')}
           resizeMode="cover"
           style={styles.slidreImage}
         />
       </View>
       <View style={styles.slide} >
         <Image
           source={require('../assets/v3.jpg')}
           resizeMode="cover"
           style={styles.slidreImage}
         />
       </View>
       <View style={styles.slide} >
         <Image
           source={require('../assets/v2.jpg')}
           resizeMode="cover"
           style={styles.slidreImage}
         />
       </View>
       <View style={styles.slide} >
         <Image
           source={require('../assets/v1.jpg')}
           resizeMode="cover"
           style={styles.slidreImage}
         />
       </View>
     </Swiper>
     </View>
     {/*================= C A T E G O R I E S    I C O  N S ======================================================================================================================= */}
     <View>
       {/*=================row one ====================== */}
       <View style={styles.categoryContainer}>
         <TouchableOpacity   style={styles.categoryIcon}   onPress={() => navigation.navigate('AddChild')} >
         < Icon name="account-plus"
                color='#338a3e'
                size={50} /> 
                <Text>Add Child</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.categoryIcon}  onPress={() => navigation.navigate('Booking')} >
         < Icon name="cellphone-text"
                color='#338a3e'
                size={50} /> 
                <Text>Booking</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.categoryIcon}  onPress={() => navigation.navigate('vaccines')} >
         < Fontisto name="injection-syringe"
                color='#338a3e'
                size={50} /> 
                <Text>Vaccines</Text>
         </TouchableOpacity>
       </View>
     </View>
     {/*=================row two ====================== */}
     <View style={styles.categoryContainer}>
         <TouchableOpacity   style={styles.categoryIcon}   onPress={() => navigation.navigate('settings')} >
         < Ionicons name="ios-settings"
                color='#338a3e'
                size={50} /> 
                <Text>Settings</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.categoryIcon}  onPress={() => navigation.navigate('FAQ')} >
         < MIcon name="question-answer"
                color='#338a3e'
                size={50} /> 
                <Text>FAQs</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.categoryIcon}  onPress={() => navigation.navigate('FAQ')} >
         < Icon name="account-edit"
                color='#338a3e'
                size={50} /> 
                <Text>Edit Profile</Text>
         </TouchableOpacity>
       </View>
     </View>
  );
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#E1E2E1',
  }, 
  heading:{
    alignItems:'center'
  },
  text:{
    color: '#1B5E20',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
   marginTop:40,
 //  paddingLeft:50,
 //  paddingRight:50,
      backgroundColor: '#E1E2E1',
     alignItems: 'center',
     justifyContent:'space-evenly',
      flexDirection:'row',
    },

    ///////////// new styling
    sliderContainer:{
      height:200,
      width:'95%',
      marginTop:10,
      justifyContent:"center",
      alignSelf:"center",
      borderRadius:8,
    },
    wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    borderRadius:8,
    backgroundColor: 'transparent'
  },
  slidreImage:{
    height: '100%' ,
    width:'100%',
    alignSelf:'center',
    borderRadius:8,
  },
  categoryContainer:{
    flexDirection:'row',
    width:'95%',
    marginTop:25,
    marginBottom:10,
    alignSelf:"center",
    justifyContent:'space-around'
  },
  categoryBtn:{
    flex:1,
    width:'30%',
    marginHorizontal:0,
    alignSelf:'center',
  },
  categoryIcon:{
    borderWidth:0,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'#c5e1a5'
  },

})