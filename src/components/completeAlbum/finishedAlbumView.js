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
        console.log(value)
      }
    } catch (error) {
      Alert.alert('Error fetching photo');
    }
  }

  // picGrid = async() => {
  //   const { activeAlbum: { name, pics } } = this.props;
  //   `@${name.replace(/\s/, '_').toLowerCase()}:${pics.length}`
  //
  //
  //   return (
  //     <ScrollView>
  //     {
  //       pics.map((album, i) => {
  //         return(
  //                 <Image
  //                   style={styles.camHeight}
  //                   style={styles.images}
  //                   source={{uri: this.state.photo}}
  //                 />
  //         )
  //       })
  //     }
  //     </ScrollView>
  //   )
  // }

  render(){
    // console.log(this.state.pics);
    const { pics } = this.state;
    const { navigation: { goBack } } = this.props;



    return(
      <View>
        <View style={styles.topBanner}>
          <TouchableOpacity onPress={() => goBack()}>
            <Ionicons name="ios-arrow-back-outline" size={32} color="white"/>
          </TouchableOpacity>
          <Text style={styles.title}>{ this.props.activeAlbum.name }</Text>
          <TouchableOpacity onPress= { () => {
            Share.share({
                message: 'SHARE THAT SHIT AROUND BITCH ASS N***A',
                url: 'http://bam.tech',
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
          onContentSizeChange={(contentWidth, contentHeight)=>{
            this.scrollView.scrollToEnd({animated: false});
        }}>
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
