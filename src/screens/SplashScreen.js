import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import dimens from '../const/dimens'
import logoIcon from '../assets/img/ic_logo.png';

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
                    duration={2600}
                    direction="alternate">
                    <Image source={logoIcon}
                        style={styles.logoStyle}
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
    },
    logoStyle: {
        height: dimens.SPLASH_LOGO_HEIGHT,
        width: dimens.SPLASH_LOGO_WIDTH,
        margin: dimens.LARGE_DIST
    }
})
