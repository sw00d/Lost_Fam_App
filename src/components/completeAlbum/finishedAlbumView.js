import React from 'react';
import { TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


export default class completedAlbum extends React.Component {



  componentDidMount(){


  }


  render(){
    return(
      <View>
        <View style={styles.topBanner}>
        <Text>Album</Text>
        </View>
      </View>
    )
  }
}
