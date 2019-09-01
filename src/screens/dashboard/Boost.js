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
                            <Text>{this.props.data.summary?(this.props.data.summary.boosts)[0].title:''}</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>{this.props.data.summary?(this.props.data.summary.boosts)[0].price:''}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Button bordered rounded warning
                            style={{ height: 35 }}>
                            <Text>{this.props.data.summary?(this.props.data.summary.boosts)[1].title:''}</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>{this.props.data.summary?(this.props.data.summary.boosts)[1].price:''}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Button bordered rounded warning
                        
                            style={{ height: 35 }}>
                            <Text >{this.props.data.summary?(this.props.data.summary.boosts)[2].title:''}</Text>
                        </Button>
                        <Text style={{ 
                            fontSize: 12, fontFamily: "OpenSans-Regular",
                            alignSelf: 'center', marginTop: 10, color: '#828282' }}>{this.props.data.summary?(this.props.data.summary.boosts)[1].price:''}</Text>
                    </View>


                </View>

            </View>
        );
    }
}