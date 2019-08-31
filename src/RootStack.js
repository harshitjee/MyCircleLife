import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import React, { Component } from 'react';
import { View, Text ,Image } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import DashBoardScreen from './screens/dashboard';
import DiscoverScreen from './screens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';
import Ionicons from 'react-native-vector-icons/AntDesign';
import HeaderIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { zoomIn,fadeIn } from 'react-navigation-transitions';

import ic_notif from './assets/img/ic_menu_not.png'
import ic_message from './assets/img/ic_menu_help.png'
import ic_home from './assets/img/ic_menu_home.png'
import ic_bonus from './assets/img/ic_menu_bonus.png'
import ic_discover from './assets/img/ic_menu_ticket.png'
import ic_shop from './assets/img/ic_menu_shop.png'
import ic_profile from './assets/img/ic_profile_avatar.png'
import BounusScreen from './screens/BonusScreen';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: DashBoardScreen,
    Bonus: BounusScreen,
    Discover: DiscoverScreen,
    Shop: ShopScreen,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = ic_home;
        if (routeName === 'Home') {
          iconName = ic_home;
        } else if (routeName === 'Bonus') {
          iconName = ic_bonus;
        } else if (routeName === 'Discover') {
          iconName = ic_discover;
        } else if (routeName === 'Shop') {
          iconName = ic_shop;
        } else if (routeName === 'Profile') {
          iconName = ic_profile;
          tintColor='';
        }

        return(
          <Image source = {iconName} style= {{width:20,height:20,alignSelf:'center',tintColor:tintColor}}></Image>
           
        );
        
       // <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1F90E1',
      inactiveTintColor: '#8E8E8E',

      labelStyle: {
        fontSize: 12,
        fontFamily: "OpenSans-Regular"
        
      },
      allowFontScaling:true,
      scrollEnabled:true,
      style: {
        height: 56,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 3,
      },
    },
  },
);

const drawerNavigator = createStackNavigator(
  {
    bottomTabNavigator,
  },
  {
    transitionConfig:() => fadeIn(),
    defaultNavigationOptions: ({ props }) => ({
      header: (
        <View
          {...props}
          style={{
            backgroundColor: '#FFF',

            flexDirection: 'column',
          }}>
          <View style={{ marginHorizontal: 15, marginVertical: 10, flexDirection: 'row' }}>
            <Text style={{ color: '#484848', fontSize: 20, flex: 1, fontFamily: "OpenSans-Bold" }}>Home</Text>
            <Image source = {ic_notif} style= {{width:20,height:20,alignSelf:'center',marginHorizontal:25}}></Image>
            
            <Image source = {ic_message} style= {{width:20,height:20,alignSelf:'center'}}></Image>
            
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#36C343', '#1B87E2', '#903692']}
            style={{ height: 4 }} />

        </View>
      ),
    }),
  },
);

const switchNavigator = createSwitchNavigator({
  SplashScreen,
  drawerNavigator,
},{
  transitionConfig: () => fadeIn(),
});

export default RootStack = createAppContainer(switchNavigator);
