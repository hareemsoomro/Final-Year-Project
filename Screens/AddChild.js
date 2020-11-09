import React from 'react';
import { StyleSheet,Button, Text, View ,TextInput,Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Swiper from 'react-native-swiper'

export default function AddChild({ navigation }) {
  return (
    <View style={styles.container}>

      {/* header */}

      <View>
            
      <View style={styles.sliderContainer}> 
     <Swiper height={150} horizontal={false} autoplay activeDotColor='#98ee99' >
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
     <Text>    </Text>



          
        </View>

        {/* footer */}

      <View style={styles.footer}>
      <Text style={styles.text_header}>Add Your Child</Text>
      {/* <Text style={styles.text_footer}>Email</Text> */}
      
         {/*============= name============== */}
      <View style={styles.action}>
            <TextInput placeholder="Child Name" style={styles.textInput } />
            <TextInput placeholder="Guardian Name" style={styles.textInput } />
          </View>
         
          {/*============= date ============== */}
          <View style={styles.action}>
            <TextInput placeholder=" select age DD/MM/YY" style={styles.textInput } />
          </View>
          

  
      <Button color="#66bb6a"
        title="Add "
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
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
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

  })