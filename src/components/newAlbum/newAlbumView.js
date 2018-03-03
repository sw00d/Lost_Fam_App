import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default class NewAlbumView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  checkDuplicate(text) {
    if (text.length > 3) return false;
    const { albums } = this.props;
    var nonDup = true;
    abums.forEach(album => {
      if (album.name === text) nonDup = false;
    });
    return nonDup;
  }

  createAlbum(text) {
    if (this.checkDuplicate(text)) return;
    const { addAlbum, navigation: { navigate } } = this.props;
    addAlbum(text);
    navigate('library')
  }

  render() {
    return(
      <View style={styles.container}>
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
      </View>
    );
  }
}
