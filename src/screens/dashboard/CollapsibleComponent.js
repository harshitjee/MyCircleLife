import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import { Image } from 'react-native'
import banner1 from '../../assets/img/ic_circle.png';
import ProgressCircle from 'react-native-progress-circle'


const dataArray = [
  { title: "PLAN USAGExx", content: "Lorem ipsum dolor sit amet" },

];
export default class CollapibleComponent extends Component {


 

  render() {
    
    return (



      <Accordion
        dataArray={dataArray}
        animation={true}
        expanded={this.props.expanded}
        renderHeader={this.props.renderHeader}
        renderContent={this.props.renderContent}
      />


    );
  }
}