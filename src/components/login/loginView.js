import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import LoginStyles from './styles';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');
const styles = LoginStyles(height, width);

export default class LoginView extends Component {
  navToRegister() {
    this.props.navigation.navigate('signUp');

  }

  login() {
    // this.props.authenticate();
    //if this state is authenticated
    this.props.navigation.navigate('mainScreens');
  }

  render() {
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
            onPress={ () => this.navToRegister() }
          >
            <Text style={styles.signUpBtnText}>SIGN UP</Text>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={ () => this.login() }
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
