import React from 'react';
import { NetInfo, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import {CacheManager} from "react-native-expo-image-cache";
import styles from './styles';

export default class CameraDiv extends React.Component {
  componentDidMount(){
    const { activeAlbum, navigation: {navigate}, token } = this.props;
    if (!token) navigate('titleScreen');
    // if (!!token && (!activeAlbum || !activeAlbum.name)) navigate('library');
  }
  state = {
    hasCameraPermission: true,
    type: Camera.Constants.Type.back,
    dblClick: false,
    blink: false
  };


  componentWillMount() {
    const { updateConnection } = this.props;
    const dispatchConnected = isConnected => updateConnection(isConnected);

    NetInfo.isConnected.fetch().then().done(() => {
      NetInfo.isConnected.addEventListener('connectionChange', dispatchConnected);
    });
    // const { status } = await Permissions.askAsync(Permissions.CAMERA);
    // this.setState({ hasCameraPermission: status === 'granted' });
  }

  componentDidUpdate(){
    const { picSaved, navigation:{ navigate }, navigation} = this.props;
    if (picSaved) {
      navigation.state.params.item();
      navigate('library');
    }
  }
  savePhoto = async (data) => {

    const { savePhoto, activeAlbum: { name, pics }, savePicToAPI, token, isConnected, navigation: { navigate }, navigation } = this.props;

    const { exif, uri } = data;
    const key = `@${name.replace(/\s/, '_').toLowerCase()}:${pics.length}`

    if (isConnected){
      savePicToAPI({user_id: token, name, exif, uri});
    } else {
      // if not connected to internet, saves pic to cache for later saving to api.
      try {
        await AsyncStorage.setItem(key, uri);
      } catch (error) {
        Alert.alert('Error. Try Again');
      } finally {
        savePhoto(key, exif.Orientation);
      }
    }
  }

  _rotate = async (uri) =>{

    const manipResult = await ImageManipulator.manipulate(
      uri,
      [{ rotate: 180}],
        { format: 'png' }
      );
      return manipResult
  }

  _shoot = async () => {
    //this add flash effect to camera
    // const self = this;
    // this.setState({hasCameraPermission: false});
    // setTimeout(()=>self.setState({hasCameraPermission: true}), 0);

    if (this.camera) {
      this.camera.takePictureAsync({ quality: 1, exif: true }).then(data => {
        let uri = data.uri;
        CacheManager.cache(uri, newURI => this.setState({ uri: newURI }));

        // Rotation occurs if pic is upside down. Don't cache pic after this fires.
        if (data.exif.Orientation === 90) {
          uri = this._rotate(uri);
        }


        this.savePhoto(data);

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
    const {type, blink} = this.state;


    if (hasCameraPermission === null) return <View />;
    else if (hasCameraPermission === false) return <Text>No access to camera</Text>;
    else {
      const { activeAlbum: {name}, navigation: {navigate} } = this.props;
      return (
        <View>

          <View style={styles.topBanner}>
            <TouchableOpacity style={styles.titleContainer} onPress={ () => navigate('library') } underlayColor='white'>
              <Text style={styles.text} >{ name } &nbsp;</Text>
              <Ionicons style={styles.iconTop} name="ios-arrow-down-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>

          <TouchableHighlight onPress={this.dblClick.bind(this)} activeOpacity={1}>
            <Camera style={styles.camStyle} type={type} ref={(camera) => { this.camera = camera; }}>
              <View style={styles.filmCircle}>
                <View style={styles.miniTopHalf}></View>
                <View style={styles.miniBottomHalf}></View>
              </View>
            </Camera>
          </TouchableHighlight>

          <View style={styles.bottomBanner}>
            <View style={styles.circle}>
              <TouchableOpacity onPress={() => this._shoot()} underlayColor="white">
                <View style={styles.miniCircle}></View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={this.typeConfig.bind(this)} style={styles.icon} underlayColor='white'>
              <Ionicons name="ios-reverse-camera-outline" size={48} color="white" />
            </TouchableOpacity>
          </View>

        </View>
      );
    }
  }
}
