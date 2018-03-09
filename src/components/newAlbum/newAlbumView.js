import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Swipeout from 'react-native-swipeout';
import {Ionicons} from '@expo/vector-icons';


export default class NewAlbumView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  checkDuplicate(text) {
    const { albums } = this.props;
    if (text.length < 3 || !albums) return false;
    var nonDup = true;
    albums.forEach(album => {
      if (album.name === text) nonDup = false;
    });
    return nonDup;
  }

  createAlbum(text) {
    const { albums} = this.props;
    if (this.checkDuplicate(text)) {
      const { addAlbum, navigation: { goBack } } = this.props;
      addAlbum(text, albums.length);
      goBack()
    }
  }

  static navigationOptions = {
    title: 'New Roll',
  };

  render() {
    const { navigation: { navigate } } = this.props;
    const { navigation: { goBack } } = this.props;
    return(
      <View>
        <Swipeout style={styles.container}>
          <TextInput
            placeholder="Enter Roll Name."
            onChangeText={ (text) => this.setState({ text }) }
            value={ this.state.text }
            style={styles.input}
            autoCorrect={true}
          />
          <TouchableOpacity
            activeOpacity={.1}
            style={styles.button}
            onPress={ () => this.createAlbum(this.state.text) }
          >
            <Text style={styles.btnText} >Add New Album</Text>
          </TouchableOpacity>
        </Swipeout>
      </View>
    );
  }
}
