import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import TitleStyles from './styles';
import PropTypes from 'prop-types';
import { FadeInView, TextBlink } from '../../animationComponents/fadeIn';
import { Background } from '../../animationComponents/titleScreenBackground';
import { BlurView } from 'expo';
import { AsyncStorage } from "react-native"



const { height, width } = Dimensions.get('window');
const styles = TitleStyles(height, width);

export default class TitleView extends Component {
  componentWillMount() {
    const {navigation:{navigate}, token, saveToken} = this.props;
    AsyncStorage.getItem('id_token').then((token) => {
      console.log('Token Received from storage');
      saveToken(token)
    });
  }
  componentDidUpdate(){
    const {navigation:{navigate}, token, saveToken} = this.props;

    if (!!token) navigate('mainScreens');

  }




  render() {
    const { navigation:{navigate} } = this.props;
    return(
      <View style={styles.body}>
        <Background style={{width: width, height: height, position: 'absolute'}} />
        <FadeInView>
        <BlurView tint='dark' intensity={80} style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}> LOGO </Text>
            <Text style={styles.signUpBtnText}> TAGLINE </Text>
          </View>
          <Text style={styles.descript}>BRIEF DESCRIPTION OF APP AND THINGS</Text>
          <View style={styles.btnContainer}>
            <TouchableHighlight
              underlayColor='gainsboro'
              activeOpacity={.5}
              style={styles.signUpBtn}
              onPress={ () => navigate('signUp') }
            >
              <Text style={styles.signUpBtnText}>SIGN UP</Text>
            </TouchableHighlight>
            <TouchableOpacity
              onPress={ () => navigate('login') }
              style={styles.loginBtn}
            >
              <Text
                style={styles.loginBtnText}
              >ALREADY A USER? LOG IN</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </FadeInView>
    </View>
    );
  }
}
