import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons';

const Header=props=>{
    return(
        <View>
            <TouchableOpacity style={{padding:10,alignItems:'flex-end'}} onPress={()=> {
            props.toggleDrawer.toggleDrawer();}
            } >
                <Ionicons name="ios-information-circle" size={32} color="#fff"/>
            </TouchableOpacity>
        </View>
    );
}
export default Header