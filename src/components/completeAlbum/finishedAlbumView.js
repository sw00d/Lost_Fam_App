import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import { Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


export default class completedAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pics: [],
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    }
  }

  componentWillMount() {
    const {navigation:{navigate}, token} = this.props;
    if (!token) navigate('titleScreen');
  }

  componentDidMount(){
    const fotos = this.props.activeAlbum.pics;

    for (let i in fotos){
      this.fetchPhoto(fotos[i].key, fotos[i].exif)
    }
  }
  fetchPhoto = async (key, exif) => {
    const {height, width} = Dimensions.get('window')


    const int = 360-parseInt(exif);
    try {
      const value = await AsyncStorage.getItem(key); // format is album title + : + number in roll
      // console.log(value)
      if (value !== null){
        if (exif == 90 || exif == -90){
          this.setState({width: height});
          this.setState({height: width});
        }
        else {
          this.setState({width: width});
          this.setState({height: height});

        }
        const rotate = await ImageManipulator.manipulate(value, [{ rotate: int },{ resize: {height: this.state.height, width: this.state.width}} ]);
        this.setState({pomc:'pomc'});
        const joined = this.state.pics.concat(rotate.uri);
        this.setState({ pics: joined })
      }
    } catch (error) {
      Alert.alert('Error fetching photo');
    }




  }
  saveToPhone = async () => {
    const uri = this.state.pics;
     const promise = CameraRoll.saveToCameraRoll(uri[0]);
     CameraRoll.saveToCameraRoll(uri[1]);
     CameraRoll.saveToCameraRoll(uri[2]);
     CameraRoll.saveToCameraRoll(uri[3]);

    promise.then(function(result) {
      console.log('save succeeded ' + result);
    }).catch(function(error) {
      console.log('save failed ' + error);
    });
  }

  static navigationOptions = {
    title: 'Album Title',
    headerRight: (
      <TouchableOpacity onPress= { () => {
        Share.share({
            message: 'SHARE THAT SHIT AROUND',
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
  ),
  };



  // LOOK INTO REPLACES SCROLLVIEW WITH FLATLIST
  render(){
    const { navigation: { goBack, navigate }, token, activeAlbum } = this.props;
    const { pics } = activeAlbum;
    return(
      <View>

        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}> {activeAlbum.name} </Title>
          </Body>
          <Right></Right>
        </Header>

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
                source={{uri: pics[i].uri}}
                />
              )
            })

          }
        </ScrollView>
      </View>
    )
  }
}
