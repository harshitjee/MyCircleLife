import React, { Component } from "react";
import { Container, Header, Content, Button, Text, View } from "native-base";




export default class Boost extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginTop: 5,
                    backgroundColor: '#fff',
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Text style={{ fontSize: 15, fontFamily: "OpenSans-Bold", color: '#555555' }}>
                        {" "}BOOST</Text>

                </View>
                <View style={{ backgroundColor: '#E5E5E5', height: 2 }}></View>
                <View style={{ flexDirection: 'row', padding: 15, backgroundColor: '#fff',alignItems:'stretch',justifyContent:'space-around' }}>
                    <View style={{ flexDirection: 'column'}}>
                        <Button bordered rounded color='purple'
                            style={{ height: 35 }}>
                            <Text>UNLIMITED</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>$300/Day</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Button bordered rounded warning
                            style={{ height: 35 }}>
                            <Text>+2.0 GB</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>$ 10.00</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Button bordered rounded warning
                        
                            style={{ height: 35 }}>
                            <Text >+1.0 GB</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>$ 6.00</Text>
                    </View>


                </View>

            </View>
        );
    }
}