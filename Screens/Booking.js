import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Booking({ navigation }) {
  return (
    <View style={styles.container}>

      {/* header */}

      <View style={styles.header}>
          <Text style={styles.text_header}>Book Now ! !</Text>
        </View>

        {/* footer */}

      <View style={styles.footer}>
      {/* <Text style={styles.text_footer}>Email</Text> */}
      <DropDownPicker dropDownStyle={{backgroundColor: '#a5d6a7'}}
      placeholder="Select Visit"
    items={[
        {label: 'First Visit', value: 'First Visit'},
        {label: 'Second Visit', value: 'Second Visit'},
        {label: 'Third Visit', value: 'Third Visit'},
        {label: 'Fourth Visit', value: 'Fourth Visit'},
        {label: 'Fifth Visit', value: 'Fifth Visit'},
        {label: 'Sixth Visit', value: 'Sixth Visit'},
    ]}
    defaultIndex={1}
    containerStyle={{height: 40}}/> 
         {/*============= name============== */}
      <View style={styles.action}>
            <TextInput placeholder="first Name" style={styles.textInput } />
            <TextInput placeholder="Last Name" style={styles.textInput } />
          </View>
          {/*============= contact ============== */}
          <View style={styles.action}>
            <TextInput placeholder="Contact No" style={styles.textInput } />
          </View>
           {/*============= Address ============== */}
           <View style={styles.action}>
            <TextInput placeholder=" Address" style={styles.textInput } />
          </View>
          {/*============= date ============== */}
          <View style={styles.action}>
            <TextInput placeholder=" select date DD/MM/YY" style={styles.textInput } />
          </View>
          

  
      <Button color="#66bb6a"
        title="Confirm Booking"
        onPress={() =>(alert("Your booking has been saved. !"))}
      />
      <Text>  </Text>
      <Button color="#66bb6a" title="Go back" onPress={() => navigation.goBack()} />  
           
    </View>
    
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
    backgroundColor: '#98ee99'
    },
    buttons:{
        top:10,
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},
footer: {
  flex: 4,
  backgroundColor: '#fff',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30
},
header: {
  flex: 0.5,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 20
},
text_header: {
  color: '#003300',
  fontWeight: 'bold',
  fontSize: 30
},
  })