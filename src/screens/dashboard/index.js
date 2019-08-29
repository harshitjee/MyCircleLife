import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ViewPager from './ViewPager'
import CollapibleComponent from './CollapsibleComponent'
import { ScrollView } from 'react-native-gesture-handler';
export default class DashBoardScreen extends Component {
  render() {
    return (
      <ScrollView style= {{backgroundColor:'#d9d9d9'}}>
      <View style = {{flexDirection:'column',marginVertical:5}}>
      <ViewPager/>
       <CollapibleComponent/>
       <Text>Boost</Text>
       <Text>Add option</Text>
       <Text>Customize my plan navigator</Text>
       <Text>View upcoming bill navigator</Text>
       <Text>roaming/iid</Text>
      </View>
      </ScrollView>
    );
  }
}
