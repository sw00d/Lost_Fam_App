
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
    const {navigation:{ navigate }, token} = this.props;
    if (!token) navigate('titleScreen');
  }

  componentDidMount(){
    const { pics } = this.props.activeAlbum;
    for (let i in pics){
      this.rotatePhoto(pics[i].uri, pics[i].exif.Orientation, i == pics.length-1);
    }
  }

  mapToImages(){
    //This crafts the image object for the ImageView component
    const { activeAlbum } = this.props;
    const { pics } = this.state;
    const arr = [];
    for (let i in pics){
      const { width, height, uri } = pics[i];
      arr.push(
        {
          source: { uri },
          title: activeAlbum.name,
          width: width,
          height: height
        }
      );
      this.setState({images: arr});
    }
  }


  rotatePhoto = async (uri, orientation, lastPic) => {
    const {height, width} = Dimensions.get('window');
    //Determines rotation amount.
    const int = 360-parseInt(orientation);
    let h;
    let w;
    try {
      if (uri !== null){
        if (orientation == 90 || orientation == -90){
          h = height;
          w = width;
        }
        else {
          w = height;
          h = width;
        }
        const rotate = await ImageManipulator.manipulate(
                        uri,
                        [
                          { rotate: int },
                          { resize: {height: h, width: w}}
                        ]
                      );
        const joined = this.state.pics.concat(rotate);
        if (lastPic) this.setState({ pics: joined }, ()=>this.mapToImages());
        else this.setState({ pics: joined });

      }
    } catch (error) {
      console.log(error);
    }




  }



  //This deals with saving the pictures locally to your phone.
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
  savePhotosToAlbum = async (assetArr) =>{
    const { activeAlbum } = this.props;

    const album = await MediaLibrary.createAlbumAsync(activeAlbum.name);
    await MediaLibrary.addAssetsToAlbumAsync(assetArr, album.id).then(()=>{
      Linking.openURL('photos-redirect://app');
    });
  }


 // Specifically for opening and closing imageView component. Called from render
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
            <Button transparent onPress={()=>goBack()}>
              <Ionicons style={styles.backBtn} name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}> { activeAlbum.name }</Title>
          </Body>
          <Right></Right>
        </Header>

        {
          // This is for the expanding to full size image onclick
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

            images.map((x, i) => {
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
