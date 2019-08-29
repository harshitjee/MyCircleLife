'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {
  PagerTabIndicator,
  IndicatorViewPager,
  PagerTitleIndicator,
  PagerDotIndicator,
} from 'rn-viewpager';

var deviceWidth = Dimensions.get('window').width;

class ViewPager extends React.Component {
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
  }

  render() {
    return (
      <IndicatorViewPager
        style={{height: 200}}
        indicator={this._renderDotIndicator()}>
        <View style={[styles.indicatorView, {backgroundColor: '#FF5252'}]}>
          <Text style={styles.text}> One </Text>
        </View>

        <View style={[styles.indicatorView, {backgroundColor: '#FF1744'}]}>
          <Text style={styles.text}> Two </Text>
        </View>

        <View style={[styles.indicatorView, {backgroundColor: '#F44336'}]}>
          <Text style={styles.text}> Three </Text>
        </View>
      </IndicatorViewPager>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'iOS' ? 20 : 0,
  },

  indicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 30,
  },
});

export default ViewPager;
