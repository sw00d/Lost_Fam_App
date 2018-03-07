import React from 'react';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


export default class completedAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pics: []
    }
  }

  componentDidMount(){
    const fotos = this.props.activeAlbum.pics;

    for (let i in fotos){
      this.fetchPhoto(fotos[i].key, fotos[i].exif)
    }
  }
  fetchPhoto = async (key, exif) => {
    console.log('pomcer', key, exif)
    const int = 360-parseInt(exif);
    try {
      const value = await AsyncStorage.getItem(key); // format is album title + : + number in roll
      const rotate = await ImageManipulator.manipulate(value, [{ rotate: int },{ resize: {height: 100, width: 100}} ]);
      if (value !== null){
        const joined = this.state.pics.concat(rotate.uri);
        this.setState({ pics: joined })
      }
    } catch (error) {
      Alert.alert('Error fetching photo');
    }
  }
  saveToPhone = async () => {
    const uri = this.state.pics[20];
    const promise = CameraRoll.saveToCameraRoll(uri);
    promise.then(function(result) {
      console.log('save succeeded ' + result);
    }).catch(function(error) {
      console.log('save failed ' + error);
    });
  }

  render(){
    // console.log(this.state.pics);
    const { pics } = this.state;
    const { navigation: { goBack } } = this.props;
    const {height, width} = Dimensions.get('window');



    return(
      <View>
        <View style={styles.topBanner}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="ios-arrow-back-outline" size={32} color="white"/>
          </TouchableOpacity>

          <Text style={styles.title} >{ this.props.activeAlbum.name }</Text>
          <TouchableOpacity onPress= { () => {
            Share.share({
                message: 'SHARE THAT SHIT AROUND BITCH ASS N***A',
                title: 'f**k ME TITLE'
              }, {
                // Android only:
                dialogTitle: 'Share goodness',
                // iOS only:
                excludedActivityTypes: [
                  'com.apple.UIKit.activity.PostToTwitter'
                ]
              })
          }}>
            <Ionicons name="ios-share-alt" size={32} color="white"/>
          </TouchableOpacity>

        </View>
        <Button onPress={ this.saveToPhone } title="Save to CameraRoll"></Button>
        <ScrollView
          contentContainerStyle={styles.scroll}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{}}>
          {

            pics.map((album, i) => {
              return(
                      <Image
                        style={styles.pic}
                        key={i}
                        source={{uri: pics[i]}}
                      />
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}
