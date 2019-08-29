import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ViewPager from './ViewPager'
import CollapibleComponent from './CollapsibleComponent'
export default class DashBoardScreen extends Component {
  render() {
    return (
      <View style = {{flexDirection:'column'}}>
      <ViewPager/>
       <CollapibleComponent/>
      </View>
    );
  }
}
