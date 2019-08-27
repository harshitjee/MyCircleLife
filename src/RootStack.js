import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator
} from 'react-navigation';

import SplashScreen from './screens/SplashScreen'
import DashBoardScreen from './screens/DashBoardScreen'
import DiscoverScreen from './screens/DiscoverScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShopScreen from './screens/DashBoardScreen'


const bottomTabNavigator = createBottomTabNavigator(
    {
        DashBoardScreen,
        DiscoverScreen,
        ProfileScreen,
        ShopScreen
    }
)

const drawerNavigator = createStackNavigator({
    bottomTabNavigator
});

const  switchNavigator = createSwitchNavigator({
    SplashScreen,
    drawerNavigator
}

);



export default RootStack= createAppContainer(switchNavigator)
