import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import LoginStyles from './styles';
import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');
const styles = LoginStyles(height, width);

export default class LoginView extends Component {
  navToRegister() {
    console.log('tryna registr');
  }

  login() {
    // this.props.authenticate();
    //if this state is authenticated
    this.props.navigation.navigate('mainScreens');
  }

  render() {
    return(
      <View style={styles.container}>
        <Text
          style={styles.loginBtnText}
        >BRIEF DESCRIPTION OF THE APP</Text>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={ () => this.navToRegister() }
        >
          <Text
            style={styles.signUpBtnText}
          >SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => this.login() }
          style={styles.loginBtn}
        >
          <Text
            style={styles.loginBtnText}
          >ALREADY A USER? LOG IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
