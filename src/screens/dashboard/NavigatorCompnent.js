import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { Image } from 'react-native'




export default class NavigatorComponent extends Component {


 

  render() {
    
    return (


          <View style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 15,
            marginTop: 5,
            backgroundColor: '#fff',
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{  fontSize: 15, fontFamily: "OpenSans-Bold", color: '#555555' }}>
            {this.props.text}
            </Text>
            <Icon name ='arrow-right'
            type='SimpleLineIcons'
            color='#675656' style={{ fontSize: 14,tintColor:'#d7d7d7' }}
            />
          </View>
          
  

     

    );
  }
}