import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
export default function SettingScreen({ navigation }) {
  return (

      <View style={styles.container}>
            <Text>Settings Screen</Text>
      <View style={styles.buttons}>
          <Button color="#66bb6a"
        title="Clicl me"
        onPress={() => alert('Success !')}/>
      </View></View>
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