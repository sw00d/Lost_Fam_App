import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import TitleStyles from './styles';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');
const styles = TitleStyles(height, width);

export default class TitleView extends Component {
  render() {
    const { token, navigation:{navigate} } = this.props;
    if (!!token) {
      navigate('mainScreens');
    }
    return(
      <View style={styles.container}>
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
      </View>
    );
  }
}
