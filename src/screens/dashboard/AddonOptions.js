import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { Image } from 'react-native'
import ic_plus from '../..//assets/img/ic_show_more.png'
import ic_minus from '../../assets/img/ic_show_less.png'


export default AddonOptions={


    _renderPlanHeader :(item, expanded)=> {
        return (<View style={{ flexDirection: 'column' }}>
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
              {" "}{item.header.value}
            </Text>
            {expanded
              ?  <Image style={{width:18,height:18}} source={ic_minus}/>
              : <Image style={{width:18,height:18}} source={ic_plus}/>}
          </View>
          <View style={{ backgroundColor: '#E5E5E5', height: 2 }}></View>
        </View>
        );
      },
      _renderPlanContent: (item)=> {
        return (
       
          <View/>
        );
      }

}



  