import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.body}>
        <View style={styles.heading}><Text style={styles.text}>Select  Visit</Text></View> 
        <ScrollView>
          {/* first row */}
        <View style={styles.container}>
         
          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="First Vist"
            onPress={() => navigation.navigate('FirstVisit')}/>
          </View>

          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="Second Vist"
            onPress={() => navigation.navigate('SecondVisit')}/>
          </View>
       </View>
          {/* 2nd row */}
       <View style={styles.container}>
          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="Third Vist"
            onPress={() => navigation.navigate('ThirdVisit')}/>
          </View>

          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="Fourth Vist"
            onPress={() => navigation.navigate('FourthVisit')}/>
          </View>
       </View>
        {/* 3rd row */}
        <View style={styles.container}>
          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="Fifth Vist"
            onPress={() => navigation.navigate('FifthVisit')}/>
          </View>

          <View style={styles.buttons}>
           <Button color="#66bb6a"
             title="Sixth Vist"
            onPress={() => navigation.navigate('SixthVisit')}/>
          </View>
       </View>

        </ScrollView>
           
      </View>
  );
}
const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: '#E1E2E1',
    paddingTop:135,
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
})