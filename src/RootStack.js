import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient'
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from './screens/SplashScreen';
import DashBoardScreen from './screens/dashboard';
import DiscoverScreen from './screens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShopScreen from './screens/ShopScreen';
import Ionicons from 'react-native-vector-icons/AntDesign';
import HeaderIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: DashBoardScreen,
    Bonus: DiscoverScreen,
    Discover: DiscoverScreen,
    Shop: ShopScreen,
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;

        let iconName = 'home';
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Bonus') {
          iconName = 'award';
        } else if (routeName === 'Discover') {
          iconName = 'tags';
        } else if (routeName === 'Shop') {
          iconName = 'user-circle';
        } else if (routeName === 'Profile') {
          iconName = 'accusoft';
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1F90E1',
      inactiveTintColor: '#8E8E8E',

      style: {
        height: 56,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
      },
    },
  },
);

const drawerNavigator = createStackNavigator(
  {
    bottomTabNavigator,
  },
  {
    defaultNavigationOptions: ({props}) => ({
      header: (
        <View
          {...props}
          style={{
            backgroundColor: '#F5F5F5',
            marginBottom: 5,
            flexDirection: 'column',
          }}>
          <View style={{marginHorizontal: 15,marginVertical:10, flexDirection: 'row'}}>
            <Text style={{color: '#4c4c4c', fontSize: 22, flex: 1}}>Home</Text>
            <HeaderIcon
              name="bell"
              size={30}
              color="#9a9a9a"
              style={{marginHorizontal: 25}}
            />
            <HeaderIcon name="message-alert" size={30} color="#9a9a9a" />
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#36C343', '#1B87E2', '#903692']}
            style={{height:4}}/>
          
        </View>
      ),
    }),
  },
);

const switchNavigator = createSwitchNavigator({
  SplashScreen,
  drawerNavigator,
});

export default RootStack = createAppContainer(switchNavigator);
