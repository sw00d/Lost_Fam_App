import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import Swipeout from 'react-native-swipeout';

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
      console.log(album.name)
      if (album.name === text) nonDup = false;
    });
    return nonDup;
  }

  createAlbum(text) {
    if (this.checkDuplicate(text)) {
      const { addAlbum, navigation: { navigate } } = this.props;
      addAlbum(text);
      navigate('library')
    }
  }

  render() {
    const { navigation: { navigate } } = this.props;
    return(
      <Swipeout onOpen={() => navigate('library') } style={styles.container}>
        <TextInput
          placeholder="Enter Roll Name."
          onChangeText={ (text) => this.setState({ text }) }
          value={ this.state.text }
        />
        <TouchableOpacity
          onPress={ () => this.createAlbum(this.state.text) }
        >
          <Text>Create New Album</Text>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}
