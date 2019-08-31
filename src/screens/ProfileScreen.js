import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class ProfileScreen extends Component {

    render() {
        return(
        <View>
          <Text
                    style={{ fontWeight: "bold",color:'#903692' ,fontSize: 22,marginTop:200,paddingHorizontal:50 }}
                     >Welcome To Profile Screen </Text>
        </View>
        )
    }
}