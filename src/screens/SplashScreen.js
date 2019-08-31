import React, { Component } from 'react';
import { View, StyleSheet,Image ,Dimensions} from 'react-native'
import * as Animatable from 'react-native-animatable';
import dimens from '../const/dimens'
import logoIcon from '../assets/img/ic_logo.png';
import splashBg from '../assets/img/ic_splash_animation_bg.png';


export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
           this.props.navigation.navigate('drawerNavigator');
        }, 3000);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Animatable.View animation="zoomIn"
                    duration={3000}
                    direction="alternate">
                    <Image source={logoIcon}
                        style={styles.logoStyle}
                    />
                </Animatable.View>
                <Animatable.View animation='slideInUp'
                 style={{ position: 'absolute',
                 bottom:-50,width:Dimensions.get('window').width,height:200}}
                    duration={3000}
                    direction="alternate">
                        <Image style={{ width:Dimensions.get('window').width,height:200}}
  resizeMode='stretch'
                     source   ={splashBg}
                    />
                </Animatable.View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    logoStyle: {
        height: dimens.SPLASH_LOGO_HEIGHT,
        width: dimens.SPLASH_LOGO_WIDTH,
        margin: dimens.LARGE_DIST
    }
})
