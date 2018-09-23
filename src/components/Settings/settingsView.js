import React from 'react';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import { Header, Button, Left, Body, Right, Title, } from 'native-base';
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

  logout = async () => {
    const {navigation:{navigate}, token, logout} = this.props;
    try {
      AsyncStorage.clear().then((e)=>{
        console.log('logging out and cleared all AsyncStorage');
        navigate('titleScreen');
      });

    } catch (error) {
      console.error('Error logging out: ' + error.message);
    }
    logout();
  }


  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity>
            <Ionicons name="ios-arrow-back"  onPress={ () => goBack() } size={32} color="white" />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={styles.title} >Settings</Title>
        </Body>
        <Right></Right>
      </Header>
        <TouchableOpacity style={styles.option} onPress={()=>this.logout()}>
          <Text style={styles.font}>Log Out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
