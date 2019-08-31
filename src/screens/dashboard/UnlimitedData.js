import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Row, Switch } from "native-base";
import { Image } from 'react-native'




export default class UnlimitedData extends Component {

 render() {
    
    return (
<View style = {{flexDirection:'row' ,backgroundColor:'#fff'}}>


              <View style={{ flexDirection: 'column', margin: 15,flex:1, }}>
                <Text style={{  color: '#808080',fontFamily: "OpenSans-Bold",fontSize:14 }}>UNLIMITED DATA </Text>
                <Text style={{ color: '#797979',fontFamily: "OpenSans-Regular", fontSize: 12 }}>Watch cat videos at 4G+ speeds to your heart's content. </Text>
              </View>
    
              <View style={{ flexDirection: 'column',alignSelf:'center',marginRight:15}}>
              <Text style={{ color: '#53B1E4', fontSize: 14,fontFamily: "OpenSans-Regular",paddingVertical:5 }}>$20.00/MO </Text>
                <Switch value ={true} trackColor={ { false: "gray", true: '#53B1E4' }} thumbColor = '#53B1E4'></Switch>
                      </View>
            </View>


 );
  }
}