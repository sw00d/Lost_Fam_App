import React from 'react';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    const { token, navigation: {navigate} } = this.props;
    if (!token) navigate('login');
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
      </View>
    )
  }
}
