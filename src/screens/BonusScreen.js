import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';


export default class BounusScreen extends Component {

    render() {
        return (
            <View >
                <Text
                    style={{ fontWeight: "bold",color:'#36C343' ,fontSize: 22,marginTop:200,paddingHorizontal:50 }}
                     >Welcome To Bonus Screen</Text>
            </View>
        )
    }
}