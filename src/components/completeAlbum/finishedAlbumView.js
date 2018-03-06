import React from 'react';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Button, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';
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
      this.fetchPhoto(fotos[i])
    }
  }
  fetchPhoto = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key); // format is album title + : + number in roll
      if (value !== null){
        const joined = this.state.pics.concat(value);
        this.setState({ pics: joined })
      }
    } catch (error) {
      Alert.alert('Error fetching photo');
    }
  }
  expandImg() {
    console.log(styles)
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

          <Text style={styles.title} onPress={this.expandImg.bind(this)}>{ this.props.activeAlbum.name }</Text>
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
