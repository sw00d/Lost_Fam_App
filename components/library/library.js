import React from 'react';
import { TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {Ionicons} from '@expo/vector-icons';



export default class Library extends React.Component {


  render(){
    return(
      <View style={styles.container} >
          <View style={styles.topBanner}>
            <Text style={styles.title}>LIBRARY</Text>
            <TouchableOpacity style={styles.icon} underlayColor='white'>
              <Ionicons name="md-add" size={32} color="white" />
            </TouchableOpacity>
          </View>

        <View style={styles.row}>
          <Text style={styles.albText}>Album Name</Text>
          <Text style={styles.albText}>0/10</Text>
        </View>

        <View style={styles.bottomBanner}>
        </View>
      </View>);
  }
}





const {height, width} = Dimensions.get('window');
const bottomBannerHeight = height/10;
const topBannerHeight = height/10;

const styles = StyleSheet.create({
  icon: {
    paddingTop: height/50,
    paddingRight: width/15
  },
  container: {
    height: height,
    width: width,
    alignItems: 'center',
  },
  topBanner: {
    top: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#C95656',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingLeft: width/11,
    paddingTop: height/60,
    fontWeight: '700',
  },
  row: {
    backgroundColor: 'transparent',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    height: topBannerHeight*1.5,
    width: width/1.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  albText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  }
});
