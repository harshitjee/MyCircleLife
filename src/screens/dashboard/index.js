import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ViewPager from './ViewPager'
import CollapibleComponent from './CollapsibleComponent'
import { ScrollView } from 'react-native-gesture-handler';

import PlanUsage from './planUsage/PlanUsage'
import Boost from './Boost'
import AddonOptions from './AddonOptions'
import UnlimitedData from './UnlimitedData'
import NavigatorComponent from './NavigatorCompnent'
import RoamingCmp from './RoamingComponent'
import RoamingPlanCmp from './RoamingPlan'
import RoamingPlanExpanded from './RoamingPlanExpanded'

import PTRView from 'react-native-pull-to-refresh';
import { connect } from 'react-redux'

import DataActions from '../../redux/DashboardReducer';

class DashBoardScreen extends Component {

  constructor() {
    super();
    this.state = { isAddonOpen: false,  isPlanCpmOpen: false };

  }


  componentDidMount() {
    this.props.getData()

  }

  _refresh = ()=>{
    this.props.getData()
  }

  render() {
    //alert(JSON.stringify(this.state));
    return (
    
      <ScrollView style={{ backgroundColor: '#d9d9d9' }}
      ref={(view) => {
        this.scrollView = view;
      }}
      >
        <PTRView onRefresh={this._refresh} >
        <View style={{ flexDirection: 'column', marginVertical: 5 }}>
          <ViewPager />
          <CollapibleComponent
            expanded={0}
            data={this.props.dashBoardData ? [this.props.dashBoardData.base] : []}
            renderHeader={PlanUsage._renderPlanHeader}
            renderContent={PlanUsage._renderPlanContent} />
          <Boost
            data={this.props.dashBoardData ? this.props.dashBoardData.boost : {}} />
          <CollapibleComponent
            data={this.props.dashBoardData ? [this.props.dashBoardData.plus_options.summary] : []}
            renderHeader={AddonOptions._renderPlanHeader}
            renderContent={AddonOptions._renderPlanContent}
            onAccordionOpen={() => { this.setState({ ...this.state, isAddonOpen: true }) }}
            onAccordionClose={() => { this.setState({ ...this.state, isAddonOpen: false }) }}
          />

          {
            !this.state.isAddonOpen &&
            <UnlimitedData
              data={this.props.dashBoardData ? (this.props.dashBoardData.plus_options.summary.addons)[0] : {}}
            />
          }

          {
            this.state.isAddonOpen &&
            getAddonBody(this.props.dashBoardData ? (this.props.dashBoardData.plus_options.summary.addons) : [])
          }
          <NavigatorComponent
            text={this.props.dashBoardData ? this.props.dashBoardData.customize_plan.summary.header.value: ""}
          />

          <NavigatorComponent
            text={this.props.dashBoardData ? this.props.dashBoardData.bill.summary.header.value: ""}

          />
          <CollapibleComponent
         
            renderHeader={RoamingCmp._renderPlanHeader}
            renderContent={RoamingCmp._renderPlanContent} 
            onAccordionOpen={() => { this.setState({ ...this.state, isPlanCpmOpen: true },()=>{
              setTimeout(() => {
                this.scrollView.scrollToEnd({ animated: true })
                }, 100)
              
            });
             }}
            onAccordionClose={() => { this.setState({ ...this.state, isPlanCpmOpen: false },()=>{
            
            
              this.scrollView.scrollToEnd({ animated: true })
            });
             }}
            />

{!this.state.isPlanCpmOpen &&
          <RoamingPlanCmp
          data={this.props.dashBoardData ? this.props.dashBoardData.others : {}} />
          }
{this.state.isPlanCpmOpen &&
          <RoamingPlanExpanded
          data={this.props.dashBoardData ? this.props.dashBoardData.others : {}} />
}
        </View>
        </PTRView>
      </ScrollView>
     
    );
  }
}



const getAddonBody = (data) => {
 return ( data.map((item, contentIndex) => (
    <UnlimitedData
      data={item}
    />
  ))
 );
}


const mapStateToProps = ({ dashBoardData }) => {
  return dashBoardData;

};
const mapDispatchToProps = dispatch => {
  return {
    getData: () => {

      dispatch(DataActions.getData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardScreen);
