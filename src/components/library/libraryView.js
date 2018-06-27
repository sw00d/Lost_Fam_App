import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import { canNavToNext } from '../../utils';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Body, Right, Icon, Title, } from 'native-base';

export default class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlb: ''
    }
  }

  componentWillMount() {
    const { navigation: { navigate }, token } = this.props;
    // if (!token) navigate('titleScreen');
  }

  updateActiveAlbum(idx) {
    const { navigation: { goBack, navigate }, activeAlbum, albums } = this.props;
    activeAlbum(idx);
    if (albums[idx].pics.length < albums[idx].capacity) goBack();
    else navigate('finishedAlbum');
  }

  deleteAndUpdate() {
    const { selectedAlb } = this.state;
    this.props.deleteAlbum(selectedAlb);
    this.forceUpdate();
  }

  addAlbum() {
    console.log('add')
    // const { register, validate } = this.props;
    // if (!canNavToNext(register, validate)) return;
    // this.props.addAlbum(register)
  }
  render() {
    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'transparent',
      onPress: () => this.deleteAndUpdate()
    }];
    const { albums } = this.props;
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

    // <View style={styles.topBanner} >
    // <Text style={styles.title}>LIBRARY</Text>
    // </View>
    return(
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={32} color="white" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Library</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Ionicons name="ios-add-circle-outline" size={32} color="white" />
            </TouchableOpacity>
          </Right>
        </Header>

          <ScrollView>
          {
            albums.map((album, i) => {
              const { pics, capacity, name } = album;
              return(
                <Swipeout onOpen={() => this.setState({selectedAlb: i})} style={styles.swipeCont} right={swipeBtns} autoClose={true} key={name}>
                  <TouchableOpacity activeOpacity={1} style={styles.row} onPress={ () => this.updateActiveAlbum(i) }>
                      <Text style={styles.albText}>{ name }</Text>
                      <Text style={styles.albText}>{ `${pics.length} / ${capacity}` }</Text>
                  </TouchableOpacity>
                </Swipeout>
              )
            })
          }
          </ScrollView>
        <View style={styles.bottomBanner}></View>
      </View>
    );
  }
}
