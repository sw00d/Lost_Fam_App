import React from 'react';
import { TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {CacheManager} from "react-native-expo-image-cache";

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: true,
    type: Camera.Constants.Type.back,
    dblClick: false
  };

  async componentWillMount() {
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
        console.log('Success sending');
        setTimeout(this.fetchPhoto, 2000);

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

  reset = async () => {
    this.setState({bool: false});

  }

  typeConfig = async () => {
    if (this.state.dblClick){
      if (this.state.type === Camera.Constants.Type.back) this.setState({type: Camera.Constants.Type.front});
      else {this.setState({type: Camera.Constants.Type.back})}
    }
    else {
      this.setState({dblClick: true});

    }
    setTimeout(() => this.setState({dblClick: false}), 400);
  }
  render() {
    const { hasCameraPermission } = this.state;
    const type = this.state.type;
    const {height, width} = Dimensions.get('window');


    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else if (hasCameraPermission === true && this.state.bool){
      return (
        <View>
          <TouchableOpacity onPress={this.reset} underlayColor="white">
            <Image
              style={{width: width, height: height}}
              source={{uri: this.state.photo}}
            />
          </TouchableOpacity>
        </View>
      );
    }
    else if (hasCameraPermission === true){
      return (
        <View>
          <TouchableHighlight onPress={this.typeConfig} activeOpacity={1}>
            <Camera onPress={this.typeConfig} style={{ width: width, height: height }} type= { type } ref={(camera) => { this.camera = camera; }}>
              <View style={styles.topBanner}>
                <TouchableOpacity onPress={this.typeConfig} style={styles.settingsIcon} underlayColor='white'>
                  <Ionicons name="md-return-left" size={32} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowDown} underlayColor='white'>
                  <Text style={styles.text} >Feb 2018 &nbsp;
                    <Ionicons name="ios-arrow-down-outline" size={32} color="white" />
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsIcon} underlayColor='white'>
                  <Ionicons name="ios-settings" size={32} color="white" />
                </TouchableOpacity>

              </View>
                <View style={styles.bottomBanner}>
                  <View style={styles.circle}>
                    <TouchableOpacity onPress={this._shoot} underlayColor="white">
                      <View style={styles.miniCircle}></View>
                    </TouchableOpacity>
                  </View>
                </View>
            </Camera>
          </TouchableHighlight>

        </View>
      );
    }
  }
}

const {height, width} = Dimensions.get('window');
const bottomBannerHeight = height/8;
const topBannerHeight = height/9;
const circleDiam = height/10;
const miniCircleDiam = height/13


const styles = StyleSheet.create({
  settingsIcon: {
    // position: 'absolute',
    // justifyContent: 'flex-start'
  },
  arrowDown: {
    // position: 'absolute',
    // alignSelf: 'center'
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
    position: 'absolute',
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
