import React from 'react';
import { TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import {CacheManager} from "react-native-expo-image-cache";
import PropTypes from 'prop-types';
import { sendPhoto } from '../../store/actions';



export default class CameraDiv extends React.Component {
  state = {
    hasCameraPermission: true,
    type: Camera.Constants.Type.back,
    dblClick: false
  };

  async componentWillMount() { // doesnt work RN
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // this.setState({ hasCameraPermission: status === 'granted' });
  }
  fetchPhoto = async () => {
    try {
      const value = await AsyncStorage.getItem('@foto:key');
      if (value !== null){
        this.setState({photo: value});
        this.setState({bool: true});
      }
    } catch (error) {
      Alert.alert('fkd');
    }
  }
  cachePhoto = async (data) => {
    try {
        await AsyncStorage.setItem('@foto:key',data.uri);
        // console.log('Success sending');
        // setTimeout(this.fetchPhoto, 2000);

    } catch (error) {
      Alert.alert('Error. Try Again');
    }
  }
  _shoot = async () => {
    if (this.camera) {
      this.camera.takePictureAsync().then(data => {
        const uri = data.uri;
        CacheManager.cache(uri, newURI => this.setState({ uri: newURI }));
        this.cachePhoto(data);
      });
    }
  };

  reset() {
    this.setState({bool: false});
  }
  dblClick() {
     if (this.state.dblClick){
       if (this.state.type === Camera.Constants.Type.back) this.setState({type: Camera.Constants.Type.front});
       else this.setState({type: Camera.Constants.Type.back})
     }
     else {
       this.setState({dblClick: true});
     }
     //detect touble tap below
     setTimeout(() => {
       console.log('double')
       this.setState({dblClick: false})
     }, 400);
   }
  typeConfig() {
    if (this.state.type === Camera.Constants.Type.back) this.setState({type: Camera.Constants.Type.front});
    else this.setState({type: Camera.Constants.Type.back});
   }


  render() {
    const { hasCameraPermission } = this.state;
    const {height, width} = Dimensions.get('window');
    const type = this.state.type;

    if (hasCameraPermission === null) {
      return <View />;
    }
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else if (hasCameraPermission === true && this.state.bool){
      return (
        <View>
          <TouchableOpacity onPress={this.reset.bind(this)} underlayColor="white">
            <Image
              style={{width: width, height: camHeight}}
              source={{uri: this.state.photo}}
            />
          </TouchableOpacity>
        </View>
      );
    }
    else if (hasCameraPermission === true){
      return (
        <View>

<<<<<<< HEAD
        <View style={styles.topBanner}>
          <TouchableOpacity onPress={this.typeConfig.bind(this)} style={styles.icon} underlayColor='white'>
            <Ionicons name="ios-reverse-camera-outline" size={32} color="white" />
              </TouchableOpacity>
                <TouchableOpacity underlayColor='white'>
=======
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('library') } underlayColor='white'>
>>>>>>> 872aac476d2f9627c816252875a5d985aedb25a4
                  <Text style={styles.text} >Feb 2018 &nbsp;
                    <Ionicons name="ios-arrow-down-outline" size={32} color="white" />
                  </Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.icon} underlayColor='white'>
            <Ionicons name="ios-settings" size={32} color="white" />
          </TouchableOpacity>
        </View>
          <TouchableHighlight onPress={this.dblClick.bind(this)} activeOpacity={1}>
            <Camera  style={{ width: width, height: camHeight }} type={this.state.type} ref={(camera) => { this.camera = camera; }}>
            </Camera>
          </TouchableHighlight>

          <View style={styles.bottomBanner}>
            <View style={styles.circle}>
              <TouchableOpacity onPress={() => this._shoot()} underlayColor="white">
                <View style={styles.miniCircle}></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}

const {height, width} = Dimensions.get('window');
const bottomBannerHeight = height/8;
const topBannerHeight = height/9;
const circleDiam = height/10;
const miniCircleDiam = height/13;
const camHeight = height-(bottomBannerHeight+topBannerHeight);
const styles = StyleSheet.create({
  icon: {
    paddingTop: height/50
  },
  topBanner: {
    height: topBannerHeight,
    width: width,
    backgroundColor: '#E9C189',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    top: 0,
    flexDirection: 'row',
  },
  bottomBanner: {
    position: 'relative',
    bottom: 0,
    height: bottomBannerHeight,
    width: width,
    backgroundColor: '#E9C189',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 23,
  },
  circle: {
    borderStyle: 'solid',
    borderWidth: width/100,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: circleDiam,
    height: circleDiam,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  miniCircle: {
    // position: 'absolute',
    backgroundColor: 'white',
    width: miniCircleDiam,
    height: miniCircleDiam,
    borderRadius: 100
  }
});
