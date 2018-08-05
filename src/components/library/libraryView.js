import React, { Component } from 'react';
import { RefreshControl, ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { canNavToNext } from '../../utils';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';

export default class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlb: '',
      albums: [],
      refreshing: false
    }
  }
  componentDidMount(){
    const { albums } = this.props;
    if (albums){
      const albArr = [];
      for (let i = 0; i <= albums.length; i++){
        const alb = albums[i];
        if (alb){
          const { name, pics, capacity, _id} = alb;
          if (name && pics && capacity && _id){
            const obj = {
              name,
              pics,
              capacity
            }
            albArr.push(obj)
          } else continue;
        }
      }
    }
  }

  componentWillMount() {
    const { token, getAlbums } = this.props;
    getAlbums(token);
    // if (!token) navigate('titleScreen');
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.reffy().then(()=>console.log('done'))
  }

  reffy() {
    const { token, getAlbums } = this.props;
    return new Promise((resolve, reject) => {
      getAlbums(token)
    })
  }

  updateActiveAlbum(idx) {
    const { navigation: { popToTop, navigate }, activeAlbum, albums } = this.props;
    activeAlbum(idx);
    if (albums[idx].pics.length < albums[idx].capacity) popToTop();
    else navigate('finishedAlbum');
  }

  deleteAndUpdate() {
    const { token } = this.props;
    const { selectedAlb } = this.state;
    this.props.deleteAlbum(token, selectedAlb);
    // console.log(this.props.albums);
    this.forceUpdate();

  }

  render() {
    // console.log('render');
    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'transparent',
      onPress: () => this.deleteAndUpdate()
    }];
    const { albums, navigation: { popToTop } } = this.props;
    // console.log(albums.forEach((e)=>console.log(e.name)));
    // uncomment this to view all keys
    // (async () => {
    //   try {
    //     // uncomment to clear cache totally
    //     // await AsyncStorage.clear();
    //     await AsyncStorage.getAllKeys((k, e) => {
    //       // console.log(e)
    //     // uncomment this to clear all keys including store key
    //     e.forEach(async key => await AsyncStorage.removeItem(key))
    //     })
    //   } catch(error) {
    //
    //   }
    // })()

    return(
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>popToTop()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title} >Library</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-add-circle-outline" size={32} color="white"  onPress={ () => this.props.navigation.navigate('newAlbum') } />
            </TouchableOpacity>
          </Right>
        </Header>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
        { (albums) ?
            albums.map((album, i) => {
              const { capacity, name, pics } = album;
              return(
                <Swipeout onOpen={() => this.setState({selectedAlb: i})} style={styles.swipeCont} right={swipeBtns} autoClose={true} key={name}>
                  <TouchableOpacity activeOpacity={1} style={styles.row} onPress={ () => this.updateActiveAlbum(i) }>
                    <Text style={styles.albText}>{ name }</Text>
                    <Text style={styles.albText}>{ `${pics.length} / ${capacity}` }</Text>
                  </TouchableOpacity>
                </Swipeout>
              )
            })
           : null
        }
        </ScrollView>

        <View style={styles.bottomBanner}></View>
      </View>
    );
  }
}
