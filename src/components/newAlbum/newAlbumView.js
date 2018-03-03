import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default class NewAlbumView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  createAlbum(text) {
    if (text.length < 3) return;
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
