import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ViewPager from './ViewPager'
import CollapibleComponent from './CollapsibleComponent'
import { ScrollView } from 'react-native-gesture-handler';

import PlanUsage from './planUsage/PlanUsage'
import Boost from './Boost'
import AddonOptions  from './AddonOptions'
import UnlimitedData from './UnlimitedData'
import NavigatorComponent from './NavigatorCompnent'
import RoamingCmp from './RoamingComponent'
import RoamingPlanCmp from './RoamingPlan'

export default class DashBoardScreen extends Component {

  render() {
 
    return (
      <ScrollView style= {{backgroundColor:'#d9d9d9'}}>
      <View style = {{flexDirection:'column',marginVertical:5}}>
      <ViewPager/>
        <CollapibleComponent
        expanded={0}
        renderHeader={PlanUsage._renderPlanHeader}
        renderContent={PlanUsage._renderPlanContent}/>
      <Boost/>
      <CollapibleComponent
       renderHeader={AddonOptions._renderPlanHeader}
       renderContent={AddonOptions._renderPlanContent}/>

       <UnlimitedData/>
       <NavigatorComponent
       text='CUSTOMIZE MY PLAN'
       />

        <NavigatorComponent
       text='VIEW UPCOMING BILLS'
       />
 <CollapibleComponent
       renderHeader={RoamingCmp._renderPlanHeader}
       renderContent={RoamingCmp._renderPlanContent}/>

            
      <RoamingPlanCmp/>
      </View>
      </ScrollView>
    );
  }
}
