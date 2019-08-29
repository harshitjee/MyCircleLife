'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';

import banner1 from '../../assets/img/ic_banner.jpg';

var deviceWidth = Dimensions.get('window').width;

class ViewPager extends React.Component {
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} 
    dotStyle={{width:5,height:5,cornerRedius:7,backgroundColor:'gray'}}
    selectedDotStyle={{width:5,height:5,cornerRedius:7,backgroundColor:'#1888d2'}}
    />;
  }

  render() {
    return (
      < View style={{backgroundColor:'#FFF'}}>
      <IndicatorViewPager
        style={{height: 150}}
        indicator={this._renderDotIndicator()}>
        <View style={[styles.indicatorView]}>
          <Image source= {banner1} style={{width: deviceWidth-10, height: 120, borderRadius:10,
           
       
        }}></Image>
        </View>

        <View style={[styles.indicatorView, ]}>
        <Image   source={{uri: 'https://media.licdn.com/dms/image/C511BAQG72Zlxjgp5hQ/company-background_10000/0?e=2159024400&v=beta&t=swam5F_PTnQvWWnBA4ySQRSsX6A6wgP83KrFFsIMtEI'}} style={{width: deviceWidth-10, height: 120, borderRadius:10, }}></Image>
         
        </View>
        
        <View style={[styles.indicatorView]}>
        <Image   source={{uri: 'https://goodyfeed.com/wp-content/uploads/2017/10/data-1-696x364.jpg'}} style={{width: deviceWidth-10, height: 120, borderRadius:10, }}></Image>
       
        </View>
      </IndicatorViewPager>
    <View style={{height:5}}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
   
    flex: 1,

  
  },

  indicatorView: {
    flex: 1,
   
    alignItems: 'center',
    
   
   
   
  },

  text: {
    color: '#fff',
    fontSize: 30,
  },
});

export default ViewPager;
