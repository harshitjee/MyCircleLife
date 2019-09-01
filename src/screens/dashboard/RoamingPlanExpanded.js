import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Button } from "native-base";
import { Image } from 'react-native'
import globe from '../../assets/img/ic_global_payasuse.png';
import roamingGlobe from '../../assets/img/ic_roaming_buy_pack.png';
import roamingPlane from '../../assets/img/ic_roaming_payasuse.png';
import * as Animatable from 'react-native-animatable';



export default class RoamingPlanExpandedCmp extends Component {




    render() {

        return (
            
            <Animatable.View animation="fadeIn"
            duration={2000}
            direction="alternate">

            <View style={{ flexDirection: 'column', backgroundColor: '#fff', padding: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={roamingGlobe} style={{
                        width: 60, height: 60
                    }} />
                    <View style={{ flexDirection: 'column', flex: 1, marginRight: 15, marginLeft: 25 }}>
                        <Text style = {{color: '#797979', fontSize: 13 ,fontFamily: "OpenSans-Regular"}} >{this.props.data.summary?this.props.data.summary.boost_options.title:''}</Text>
                        <View style={{ marginTop: 15 }}>
                            <Button bordered rounded info
                                style={{ height: 35, width: 165 }}>
                                <Text>{this.props.data.summary?this.props.data.summary.boost_options.button.title:''}</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <Text style={{ marginHorizontal: 10, marginVertical: 10,color: '#d6d66', fontSize: 13 ,fontFamily: "OpenSans-Bold"  }}>
                {this.props.data.summary?this.props.data.detail.heading:''}
                
                </Text>


                <View style={{ flexDirection: 'row',marginVertical:10 ,justifyContent:'space-around'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={roamingPlane} style={{
                            width: 40, height: 40,
                            alignSelf:'center'
                        }} />
                        <View style={{ flexDirection: 'column', marginLeft: 15, alignSelf: 'center' }}>

                            <Text style={{ color: '#2199de',  fontSize: 14,marginVertical:5 ,fontFamily: "OpenSans-Bold" }}>ROAMING* </Text>
                            <Text style={{ color: '#d6d66', fontSize: 13 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.summary.roaming_price:''}</Text>


                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={globe} style={{
                            width: 40, height: 40,
                            alignSelf:'center'
                        }} />
                        <View style={{ flexDirection: 'column', marginLeft: 15, alignSelf: 'center' }}>

                            <Text style={{  color: '#2199de',  fontSize: 14,marginVertical:5 ,fontFamily: "OpenSans-Bold"  }}>GLOBAL </Text>
                            <Text style={{ color: '#d6d66', fontSize: 13 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.summary.global_price:''} </Text>


                        </View>

                    </View>

                </View>


                <View style = {{flexDirection:'row'}}>
                 <View style = {{flexDirection:'column',flex:1}}>
                 <View style = {{flexDirection:'row' , paddingBottom:5,justifyContent:'space-between'}}>  
                 <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Bold" }}> DATA </Text>
                <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.detail.roaming.data:''}  </Text>
                
                 </View>

                  <View style = {{flexDirection:'row' , paddingBottom:5,justifyContent:'space-between'}}>  
                 <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Bold" }}> TALKTIME </Text>
                <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.detail.roaming.calls:''}  </Text>
                
                 </View>

                  <View style = {{flexDirection:'row' , paddingBottom:5,justifyContent:'space-between'}}>  
                 <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Bold" }}> SMS </Text>
                <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.detail.roaming.sms:''}  </Text>
                
                 </View>
                 </View>
<View  style = {{ width:1,height:'100%',backgroundColor:'#8a8f8a'}}></View>

                <View style = {{flexDirection:'column',flex:1}}>
                

                
                 <View style = {{flexDirection:'row' , paddingBottom:5,justifyContent:'space-between'}}>  
                 <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Bold" }}> IID TALKTIME </Text>
                <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.detail.global.idd_calls:''}  </Text>
                
                 </View>

                  <View style = {{flexDirection:'row' , paddingBottom:5,justifyContent:'space-between'}}>  
                 <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Bold" }}> SMS </Text>
                <Text style={{ color: '#8a8f8a', fontSize: 11 ,fontFamily: "OpenSans-Regular" }}>{this.props.data.summary?this.props.data.detail.global.global_sms:''}  </Text>
                
                 </View>

                
                 </View>
                 
                

                </View>

            </View>

</Animatable.View>
        );
    }
}