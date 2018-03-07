import React, { Component } from 'react';
import {ScrollView, Text, View, TouchableOpacity, Dimensions, StyleSheet, Button, AsyncStorage} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import Swipeout from 'react-native-swipeout';

export default class LibraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlb: ''
    }
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

  render() {
    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'transparent',
      onPress: () => this.deleteAndUpdate()
    }]
    const { navigation: { navigate }, albums } = this.props;

    // uncomment this to view all keys
    (async () => {
      try {
        // uncomment to clear cache totally
        // await AsyncStorage.clear();
        await AsyncStorage.getAllKeys((k, e) => {
          // console.log(e)
        // // uncomment this to clear all keys including store key
        // e.forEach(async key => await AsyncStorage.removeItem(key))
        })
      } catch(error) {

      }
    })()

    return(
      <View style={styles.container}>
        <View style={styles.topBanner} >
          <Text style={styles.title}>LIBRARY</Text>
          <TouchableOpacity onPress={() => navigate('newAlbum')} style={styles.icon} underlayColor='white'>
            <Ionicons name="md-add" size={32} color="white"/>
          </TouchableOpacity>
        </View>
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
