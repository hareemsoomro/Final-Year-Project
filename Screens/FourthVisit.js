import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
export default function FourthVisit({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of vaccines that we provide on Fourth vist</Text>
      <Text style={styles.text}>1. OPV-III  (orally) against Poliovirus</Text>
      <Text style={styles.text}>2. IPV (left thigh) </Text>
      <Text style={styles.text}>3. 3rd dose of Pneumococcal-III against Pneumonia (left thigh)</Text>
      <Text style={styles.text}>4. 3rd dose of Pentavalent-III against Tetnus,Pertusis, Hepatitis-B and Haemophilus influenza (left thigh)</Text>


      <View style={styles.btn_container}>   
      <Button color="#66bb6a"
        title="Book Now"
        onPress={() => navigation.navigate('Booking')}
      />
      <Button color="#66bb6a" title="Go back" onPress={() => navigation.goBack()} />      
    </View></View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E1E2E1',
    justifyContent: 'center',
    paddingLeft:30,
    paddingRight:30,
 
  },
  title:{
    color: '#1B5E20',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom:20,
    paddingTop:20,
  },
  text:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
   paddingBottom:5,
    paddingTop:5,
  },
  btn_container:{
      marginTop:20,
      marginBottom:10,
      flexDirection:'row',
      justifyContent:'space-evenly'
  }
})