import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button color="#66bb6a"
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button color="#66bb6a" title="Go to Details... again" onPress={() => navigation.push('Details')}/>
      <Button color="#66bb6a" title="Go back" onPress={() => navigation.goBack()} />      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E1E2E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
      top:10,
      width:'70%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
  }
})