import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';
import { Linking, Share, ScrollView, TouchableHighlight, Image, Alert, CameraRoll, Vibration, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import { MediaLibrary, Camera, Permissions, FileSystem, ImageManipulator } from 'expo';
import Expo from 'expo';
import {Ionicons} from '@expo/vector-icons';
import ImageView from 'react-native-image-view';
import styles from './styles';


export default class completedAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pics: [],
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      images: [],
      visible: false,
      idx: 0
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
    this.mapToImages();

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
    const { activeAlbum, activeAlbum: { pics } } = this.props;

    const assetArr = [];

    //Creates assets from URI's
    for (let i in pics){
      const asset = await MediaLibrary.createAssetAsync(pics[i].uri);
      assetArr.push(asset);
    }
    // I ask permissions
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ permissionsGranted: status === 'granted' }, ()=>this.savePhotosToAlbum(assetArr));

  };

  // if permissions granted
  savePhotosToAlbum = async (assetArr) =>{
    const { activeAlbum } = this.props;

    const album = await MediaLibrary.createAlbumAsync(activeAlbum.name);
    await MediaLibrary.addAssetsToAlbumAsync(assetArr, album.id).then(()=>{
      Linking.openURL('photos-redirect://app');
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

 mapToImages(){
   const { activeAlbum: { pics }, activeAlbum } = this.props;
   const arr = [];
   for (i in pics){
     const { PixelXDimension, PixelYDimension, } = pics[i].exif;
     arr.push(
       {
         source: { uri: pics[i].uri},
         title: activeAlbum.name,
         width: PixelYDimension/2.5,
         height: PixelXDimension/2.5
       }
     );
     this.setState({images: arr});
   }
 }

 imageView(key){
   key ? this.setState({idx: key}) : null;
   this.setState({visible: !this.state.visible});
 }

  // LOOK INTO REPLACES SCROLLVIEW WITH FLATLIST
  render(){
    const { navigation: { goBack, navigate }, token, activeAlbum, activeAlbum: { pics } } = this.props;
    const { images, idx, visible } = this.state;
    return(
      <View>

        <Header style={styles.header}>
          <Left>
            <TouchableOpacity style={styles.backBtn} transparent onPress={()=>goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={styles.title}> {activeAlbum.name} </Title>
          </Body>
          <Right></Right>
        </Header>

        {
          // this is for the full size image;
          (images.length > 1) ?
          <ImageView
            images={images}
            imageIndex={idx}
            isVisible={visible}
            animationType='slide'
            onClose={()=>this.imageView()}
            renderFooter={(currentImage) => (<View><Text>{activeAlbum.name}</Text></View>)}
          /> : null
        }
        <View style={styles.scrollContainer}>
          <ScrollView
          contentContainerStyle={styles.scroll}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={(contentWidth, contentHeight)=>{}}>

            <View style={styles.btnContainer}>
              <Button style={styles.Btn} onPress={ this.saveToPhone } title="Save to CameraRoll">
                <Text style={styles.btnFont}>Save Roll</Text>
              </Button>
              <Button style={styles.Btn} onPress={ ()=>navigate('orderForm') } title="Order Prints">
                <Text style={styles.btnFont}>Order Prints</Text>
              </Button>
            </View>

          {

            images.map((album, i) => {
              return(
                <TouchableOpacity onPress={()=>this.imageView(i)}style={styles.picContainer} key={i*1.1}>
                  <Image
                    style={styles.pic}
                    key={i}
                    source={{uri: images[i].source.uri}}
                  />
                </TouchableOpacity>
              )
            })

          }
          </ScrollView>
        </View>
      </View>
    )
  }
}
