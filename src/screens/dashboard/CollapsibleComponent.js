import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },

];
export default class CollapibleComponent extends Component {


    _renderHeader(item, expanded) {
        return (<View style={{flexDirection:'column'}}>
          <View style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical:15,
            justifyContent: "space-between",
            alignItems: "center" ,
             }}>
          <Text style={{ fontWeight: "600" ,fontSize:18,color:'#848484'}}>
              {" "}{item.title}
            </Text>
            {expanded
              ? <Icon style={{ fontSize: 18 ,color:'#6F82B2'}} name="remove-circle" />
              : <Icon style={{ fontSize: 18 ,color:'#6F82B2'}} name="add-circle" />}
          </View>
          <View style ={{backgroundColor:'gray',height:1}}></View>
          </View>
        );
      }
      _renderContent(item) {
        return (
          <Text
            style={{
             
              padding: 10,
              
            }}
          >
            {item.content}
          </Text>
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