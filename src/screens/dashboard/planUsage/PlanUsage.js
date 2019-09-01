import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { Image } from 'react-native'
import banner1 from '../../../assets/img/ic_circle.png';
import ProgressCircle from 'react-native-progress-circle'

import ic_plus from '../../../assets/img/ic_show_more.png'
import ic_minus from '../../../assets/img/ic_show_less.png'

export default PlanUsage={


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
              {" "}{item.summary.header.value}
            </Text>
            {expanded
              ? <Image style={{width:18,height:18}} source={ic_minus}/>
              : <Image style={{width:18,height:18}} source={ic_plus}/>}
          </View>
          <View style={{ backgroundColor: '#E5E5E5', height: 2 }}></View>
        </View>
        );
      },
      _renderPlanContent: (item)=> {
        return (
          <View
            style={{
    
              padding: 10,
              backgroundColor: '#fff',
    
            }}
          >
            <View style={{ flexDirection: 'row',marginTop:10,marginBottom:5 }}>
    
              <Image source={banner1} style={{
                width: 125, height: 125
    
    
              }}></Image>
    
              <View style={{ flexDirection: 'column', marginLeft: 20,alignSelf:'center' ,flex:1}}>
                <Text style={{ color: '#1B85CF', fontFamily: "OpenSans-Bold", fontSize: 14 }}>{(item.summary.components)[0].title.value}</Text>
                <Text style={{ color: '#262626', fontSize: 13,fontFamily: "OpenSans-Regular" }}>{(item.summary.components)[0].subtitle.value} </Text>
                <Text style={{ color: '#797979', fontSize: 12 ,fontFamily: "OpenSans-Regular"}}>{(item.summary.components)[0].description.value}</Text>
              </View>
    
            </View>
    
            <View style={{ flexDirection: 'row',marginVertical:20 }}>
            <View style = {{alignSelf:'center'}}>
            <View style = {{borderWidth:3,borderColor:'#1F9CF0',borderRadius:75}}>
              <ProgressCircle
                percent={(item.detail.calls.left/item.detail.calls.total)*100}
                radius={30}
                
                style={{alignSelf:'center'}}
                color="#8CCCF8"
                borderWidth={5}
                shadowColor="#fff"
                bgColor="#fff"
            />
            </View>
            </View>
    
              <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ color: '#808080',fontFamily: "OpenSans-Bold", fontSize: 14 }}>{(item.detail.calls_usage.components)[0].title.value} </Text>
                <Text style={{ color: '#797979', fontSize: 13 ,fontFamily: "OpenSans-Regular"}}>{(item.detail.calls_usage.components)[0].subtitle.value} </Text>
                <Text style={{ color: '#797979', fontSize: 13 ,fontFamily: "OpenSans-Regular"}}>{(item.detail.calls_usage.components)[0].description.value}</Text>
              </View>
    
            </View>
    
            <View style={{ flexDirection: 'row',marginVertical:20 }}>
            <View style = {{alignSelf:'center'}}>
            <View style = {{borderWidth:3,borderColor:'#1F9CF0',borderRadius:75}}>
              <ProgressCircle
                 percent={(item.detail.sms.left/item.detail.sms.total)*100}
                radius={30}
                
               
                style={{alignSelf:'center'}}
                color="#8CCCF8"
                borderWidth={5}
                shadowColor="#fff"
                bgColor="#fff"
            />
            </View>
            </View>
    
              <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                <Text style={{ color: '#808080',fontFamily: "OpenSans-Bold", fontSize: 14  }}>{(item.detail.sms_usage.components)[0].title.value} </Text>
                <Text style={{ color: '#797979', fontSize: 13 ,fontFamily: "OpenSans-Regular" }}>{(item.detail.sms_usage.components)[0].subtitle.value} </Text>
                <Text style={{ color: '#797979', fontSize: 13  ,fontFamily: "OpenSans-Regular"}}>{(item.detail.sms_usage.components)[0].description.value}</Text>
              </View>
    
            </View>
          </View>
        );
      }

}



  