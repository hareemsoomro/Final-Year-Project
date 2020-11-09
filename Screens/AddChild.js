import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,Image} from 'react-native';
import { List,ListItem, Item, Input, Label ,Button,DatePicker} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class AddChild extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render(){
  return (
    <View style={styles.container}>
        {/* footer */}

      <View style={styles.footer}>
      <Text style={styles.text_header}>Add Your Child</Text>
      {/* <Text style={styles.text_footer}>Email</Text> */}
      
         {/*============= name============== */}
      <View style={styles.action}>
            <TextInput placeholder="Child Name" style={styles.textInput } />
          </View>
         
          {/*============= date ============== */}
          <View style={styles.action}>
            <DatePicker
            defaultDate={new Date(2020, 7, 2)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
          </View>

        {/*============= buttons ============== */}
          <View style={styles.btn}>
        <Button  rounded success style={styles.mybtn}
        onPress={()=>this.saveItem()}>
          <Text>ADD</Text>
        </Button>
        <Button rounded danger style={styles.mybtn}
        onPress={()=>this.removeIt()} >
          <Text>DELETE ALL</Text>
        </Button>
      </View>

           {/*============= list ============== */}
           <List>
            <ListItem>
              <Text>Mohammad Azan </Text>
            </ListItem>
            <ListItem>
              <Text>Aiza Naz</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>

    </View>
    
    </View>
  );
}}
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
    borderBottomWidth: 2,
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
  flex: 1,
  backgroundColor: '#fff',
  //borderTopLeftRadius: 30,
  // borderTopRightRadius: 30,
  paddingHorizontal: 20,
  paddingVertical: 30
},
header: {
  flex: 1,
  justifyContent: 'flex-end',
  paddingHorizontal: 20,
  paddingBottom: 50
},
text_header: {
  color: '#003300',
  fontWeight: 'bold',
  fontSize: 30
},



sliderContainer:{
    height:150,
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
btn:{
  flexDirection:'row',
  padding:30,
  justifyContent:"space-around",
},
mybtn:{
  width:120,
  justifyContent:"center"}


  })