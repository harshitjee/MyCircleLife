import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View, Button } from "native-base";
import { Image } from 'react-native'
import globe from '../../assets/img/ic_global_payasuse.png';
import roamingGlobe from '../../assets/img/ic_roaming_buy_pack.png';
import roamingPlane from '../../assets/img/ic_roaming_payasuse.png';




export default class RoamingPlanCmp extends Component {




    render() {

        return (
            <View style={{ flexDirection: 'column', backgroundColor: '#fff', padding: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={roamingGlobe} style={{
                        width: 60, height: 60
                    }} />
                    <View style={{ flexDirection: 'column', flex: 1, marginRight: 15, marginLeft: 25 }}>
                        <Text style = {{color: '#797979', fontSize: 13 ,fontFamily: "OpenSans-Regular"}} >Going to Malaysia or multiple destinations? Roam worry-free starting at $5 for 1 GB!</Text>
                        <View style={{ marginTop: 15 }}>
                            <Button bordered rounded info
                                style={{ height: 35, width: 165 }}>
                                <Text>Buy Roam Boost</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={{ marginHorizontal: 10, marginVertical: 10, height: 1, backgroundColor: '#D5D5D5' }}></View>


                <View style={{ flexDirection: 'row',marginVertical:10 ,justifyContent:'space-around'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={roamingPlane} style={{
                            width: 40, height: 40,
                            alignSelf:'center'
                        }} />
                        <View style={{ flexDirection: 'column', marginLeft: 15, alignSelf: 'center' }}>

                            <Text style={{ color: '#2199de',  fontSize: 14,marginVertical:5 ,fontFamily: "OpenSans-Bold" }}>ROAMING* </Text>
                            <Text style={{ color: '#d6d66', fontSize: 13 ,fontFamily: "OpenSans-Regular" }}>$ 0.00 </Text>


                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={globe} style={{
                            width: 40, height: 40,
                            alignSelf:'center'
                        }} />
                        <View style={{ flexDirection: 'column', marginLeft: 15, alignSelf: 'center' }}>

                            <Text style={{  color: '#2199de',  fontSize: 14,marginVertical:5 ,fontFamily: "OpenSans-Bold"  }}>GLOBAL </Text>
                            <Text style={{ color: '#d6d66', fontSize: 13 ,fontFamily: "OpenSans-Regular" }}>$ 0.00 </Text>


                        </View>

                    </View>

                </View>

            </View>


        );
    }
}