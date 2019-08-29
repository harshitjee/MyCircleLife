import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { Image } from 'react-native'
import banner1 from '../../assets/img/ic_circle.png';
import ProgressCircle from 'react-native-progress-circle'


const dataArray = [
  { title: "PLAN USAGE", content: "Lorem ipsum dolor sit amet" },

];
export default class CollapibleComponent extends Component {


  _renderHeader(item, expanded) {
    return (<View style={{ flexDirection: 'column' }}>
      <View style={{
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 10,
        backgroundColor: '#fff',
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <Text style={{ fontWeight: "600", fontSize: 20, fontWeight: 'bold', color: '#555555' }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon color='#3C4D7B' style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon color='#3C4D7B' style={{ fontSize: 18 }} name="ios-add-circle-outline" />}
      </View>
      <View style={{ backgroundColor: '#E5E5E5', height: 2 }}></View>
    </View>
    );
  }
  _renderContent(item) {
    return (
      <View
        style={{

          padding: 10,
          backgroundColor: '#fff',

        }}
      >
        <View style={{ flexDirection: 'row' }}>

          <Image source={banner1} style={{
            width: 120, height: 120, borderRadius: 10,


          }}></Image>

          <View style={{ flexDirection: 'column', marginLeft: 30 }}>
            <Text style={{ color: '#1B85CF', fontWeight: 'bold', fontSize: 16 }}>40 GB/40 GB left </Text>
            <Text style={{ color: '#262626', fontSize: 15 }}>UNLIMITED DATA </Text>
            <Text style={{ color: '#797979', fontSize: 14 }}>*This is your data allocation at 4G+ speeds. After consuming this,you will continue to be connected on managed speeds. </Text>
          </View>

        </View>

        <View style={{ flexDirection: 'row',marginVertical:20 }}>
        <View style = {{alignSelf:'center'}}>
          <ProgressCircle
            percent={90}
            radius={30}
            
            style={{alignSelf:'center'}}
            color="#8CCCF8"
            borderWidth={6}
            shadowColor="#fff"
            bgColor="#fff"
        />
        </View>

          <View style={{ flexDirection: 'column', marginLeft: 30 }}>
            <Text style={{ color: '#8F8F8F', fontWeight: 'bold', fontSize: 16 }}>TALKTIME </Text>
            <Text style={{ color: '#797979', fontSize: 14 }}>91 min/100 min left </Text>
            <Text style={{ color: '#797979', fontSize: 14 }}>+  0 mins ($ 0.08/min)</Text>
          </View>

        </View>

        <View style={{ flexDirection: 'row',marginVertical:20 }}>
        <View style = {{alignSelf:'center'}}>
          <ProgressCircle
            percent={100}
            radius={30}
            
            style={{alignSelf:'center'}}
            color="#8CCCF8"
            borderWidth={6}
            shadowColor="#fff"
            bgColor="#fff"
        />
        </View>

          <View style={{ flexDirection: 'column', marginLeft: 30 }}>
            <Text style={{ color: '#8F8F8F', fontWeight: 'bold', fontSize: 16 }}>SMS </Text>
            <Text style={{ color: '#797979', fontSize: 14 }}>25 sms/25 sms left </Text>
            <Text style={{ color: '#797979', fontSize: 14 }}>+  0 sms ($ 0.05/sms)</Text>
          </View>

        </View>
      </View>
    );
  }

  render() {
    return (



      <Accordion
        dataArray={dataArray}
        animation={true}
        expanded={true}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />


    );
  }
}