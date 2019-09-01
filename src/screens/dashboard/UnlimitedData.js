import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Row, Switch } from "native-base";
import { Image } from 'react-native'




export default class UnlimitedData extends Component {

 render() {
    
    return (
<View style = {{flexDirection:'row' ,backgroundColor:'#fff'}}>


              <View style={{ flexDirection: 'column', margin: 15,flex:1, }}>
                <Text style={{  color: '#808080',fontFamily: "OpenSans-Bold",fontSize:14 }}>{this.props.data.title} </Text>
                <Text style={{ color: '#797979',fontFamily: "OpenSans-Regular", fontSize: 12 }}>{this.props.data.subtitle}</Text>
              </View>
    
              <View style={{ flexDirection: 'column',alignSelf:'center',marginRight:15}}>
              <Text style={{ color: '#53B1E4', fontSize: 14,fontFamily: "OpenSans-Regular",paddingVertical:5 }}>{this.props.data.price} </Text>
                <Switch value ={this.props.data.enabled} trackColor={ { false: "#D3D3D3", true: '#53B1E4' }} thumbColor = {this.props.data.enabled?'#53B1E4':'#D3D3D3'}></Switch>
                      </View>
            </View>


 );
  }
}