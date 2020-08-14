import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Button, Text, View } from 'react-native';
import { Accordion, Footer ,FooterTab} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Header from './Header'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const dataArray = [
  { title: "What do immunizations do?", content: "Vaccines work by preparing the child's body to fight illness. Each contains either a dead or a weakened germ (or parts of it) that cause a particular disease. The body practices fighting the disease by making antibodies that recognize specific parts of that germ." },
  { title: "Are Vaccines safe and effective?", content: "Vaccines are very safe and effective. Any licensed vaccine is rigorously tested across multiple phases of trials before it is approved for use, and regularly reassessed once it is on the market. Scientists are also constantly monitoring information from several sources for any sign that a vaccine may cause an adverse event. Most vaccine reactions are usually minor and temporary, such as a sore arm or mild fever. It is far more likely to be seriously injured by a vaccine-preventable disease than by a vaccine. For example, in the case of polio, the disease can cause paralysis, measles can cause encephalitis and blindness, and some vaccine-preventable diseases can even result in death. Many more illnesses and deaths would occur without vaccines." },
  { title: "What are the side effects and how to treat?", content: "Vaccines, like any medication, may cause some side effects. Most of these side effects are very minor, like soreness where the shot was given, fussiness, or a low-grade fever. These side effects typically only last a couple of days and are treatable. For example, you can apply a clean, cool, wet washcloth on the sore area to ease discomfort." },
  { title: "What are the preventable diseases?", content: "Polio ,Tetanus (Lockjaw), Measles Diphtheria, Pertussis (Whooping cough), Hepatitis B, Meningitis, Pneumonia, Childhood TB, Diarrhea" },
  { title: "Why it is necessary", content: "Vaccines help protect infants, children, and teens from serious diseases. Getting childhood vaccines means your child can develop immunity (protection) against diseases before they come into contact with them.Children need immunizations (shots and drops) to protect them from 9 Vaccine-Preventable Childhood Diseases. These diseases have serious complications and can even kill children." },
  { title: "How many visits my child need?", content: "Get your child vaccinated 6 times against 10 diseases by the age of 15 months. " },
  { title: "Can my child be immunized if he/she is sick?", content: "Even if your child has a slight fever, cold or a runny nose, upset stomach, ear infection, or is taking antibiotics, he or she can still be immunized safely. There is no greater risk of harmful events when immunizations are given during a minor illness. However, if a fever or other symptoms suggest a moderate or serious illness, your child should not be vaccinated until the symptoms improve." },
  { title: "What to do if my child has reaction?", content: "This is called the Adverse Event Following Immunization (AEFI), if you think your child is experiencing a persistent or severe reaction, call your doctor or get the child to a doctor right away. Write down what happened and the date and time it happened. Ask your doctor, nurse or health department to file a “Vaccine Adverse Event Report”." },
];

export default function FAQ({ navigation }) {
  return (
    <View style={styles.body} >
      <View>
        <Ionicons.Button  name="ios-menu"
          size={32} backgroundColor="#66bb6a"
          onPress={() => navigation.openDrawer()}>
        </Ionicons.Button>
      </View>

      <View style={styles.container} >
        <StatusBar backgroundColor='#43a047' barStyle="light-content" />
         <Text style={styles.title}>FAQs </Text>
        <Accordion dataArray={dataArray} expanded={0}
         expandedIcon="remove"
         iconStyle={{ color: "#43a047" }}
         expandedIconStyle={{ color: "red" }}
         headerStyle={{ backgroundColor: "#81c784" }}
         contentStyle={{ backgroundColor: "#c8e6c9" }} />
        


      </View>
      <View style={styles.buttons}>
        
        <Ionicons.Button name="ios-exit" title="back"
          size={32} backgroundColor="#66bb6a"
          onPress={() => navigation.navigate('Home')}>
        Back</Ionicons.Button>
      </View></View>
  );
}
const styles = StyleSheet.create({
 body:{
    backgroundColor: '#E1E2E1',
    flex:1,
  },
  container: {
    paddingHorizontal:10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#1B5E20',
    fontSize: 30,
    fontWeight: 'bold'
  },
  buttons: {
    //top: 10,
   // bottom: 10,
   // width: '90%',
   // alignItems: 'center',
    //justifyContent: 'center',
  }
})