import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class ShopScreen extends Component {

    render() {
        return(
        <View>
            <Text
                    style={{ fontWeight: "bold",color:'#1B87E2' ,fontSize: 22,marginTop:200,paddingHorizontal:50 }}
                     >Welcome To Shop Screen </Text>
        </View>
        )
    }
}