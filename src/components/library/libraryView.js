import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Dimensions, StyleSheet, Button} from 'react-native';
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
    const { navigation: { navigate }, activeAlbum } = this.props;
    navigate('camera');
    activeAlbum(idx);
  }
  deleteSomeAlbum(evt) {
    const selectedAlb = this.state.selectedAlb;
    this.props.deleteAlbum(selectedAlb);
    this.forceUpdate();
  }

  render() {
    const { navigation: { navigate }, albums } = this.props;
    let swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'transparent',
        onPress: () => {this.deleteSomeAlbum()}
      }
    ]
    return(
      <View style={styles.container}>
        <View style={styles.topBanner} >
          <Text style={styles.title}>LIBRARY</Text>
          <TouchableOpacity onPress={() => navigate('newAlbum')} style={styles.icon} underlayColor='white'>
            <Ionicons name="md-add" size={32} color="white"/>
          </TouchableOpacity>
        </View>

        {
          albums.map((album, i) => {
            const { picsTaken, capacity, name } = album;
            return(
              <Swipeout onOpen={() => this.setState({selectedAlb: name})} style={styles.swipeCont} right={swipeBtns} autoClose={true} key={name}>
                <TouchableOpacity activeOpacity={1} style={styles.row} onPress={ () => this.updateActiveAlbum(i) }  >
                  <View>
                    <Text style={styles.albText}>{ name }</Text>
                    <Text style={styles.albText}>{ `${picsTaken} / ${capacity}` }</Text>
                  </View>
                </TouchableOpacity>
              </Swipeout>
            )
          })
        }

        <View style={styles.bottomBanner}></View>
      </View>
    );
  }
}


// <Button title='Delete' testId={name}  />
