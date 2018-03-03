import React from 'react';
import { TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import {CacheManager} from "react-native-expo-image-cache";
import { sendPhoto } from '../../store/actions';
import styles from './styles';

export default class CameraDiv extends React.Component {
  state = {
    hasCameraPermission: true,
    type: Camera.Constants.Type.back,
    dblClick: false
  };

  componentWillMount() {
    const { activeAlbum, navigation: {navigate} } = this.props;
    if (!activeAlbum || !activeAlbum.name) navigate('library');

    const { status } = async () => await Permissions.askAsync(Permissions.CAMERA);
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
              style={styles.images}
              source={{uri: this.state.photo}}
            />
          </TouchableOpacity>
        </View>
      );
    }
    else if (hasCameraPermission === true){
      const albumTitle = this.props.activeAlbum.name;
      return (
        <View>

        <View style={styles.topBanner}>
          <TouchableOpacity onPress={this.typeConfig.bind(this)} style={styles.icon} underlayColor='white'>
            <Ionicons name="ios-reverse-camera-outline" size={32} color="white" />
              </TouchableOpacity>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('library') } underlayColor='white'>
                  <Text style={styles.text} >{albumTitle} &nbsp;
                    <Ionicons name="ios-arrow-down-outline" size={32} color="white" />
                  </Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.icon} underlayColor='white'>
            <Ionicons name="ios-settings" size={32} color="white" />
          </TouchableOpacity>
        </View>
          <TouchableHighlight onPress={this.dblClick.bind(this)} activeOpacity={1}>
            <Camera  style={styles.camera} type={this.state.type} ref={(camera) => { this.camera = camera; }}>
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
