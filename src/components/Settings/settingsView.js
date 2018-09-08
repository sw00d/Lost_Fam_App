import React from 'react';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    // if (!token) navigate('titleScreen');
  }

  // logout = async () => {
  //   const {navigation:{navigate}, token} = this.props;
  //
  //   console.log('logout');
  //   try {
  //     // await AsyncStorage.removeItem(token);
  //     alert('logged out')
  //   } catch (error) {
  //     console.error('Error logging out: ' + error.message);
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.font}>Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.font}>Payment Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.font}>Full Version</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.font}>About</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.font}>Preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={()=>this.logout()}>
          <Text style={styles.font}>Log Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
