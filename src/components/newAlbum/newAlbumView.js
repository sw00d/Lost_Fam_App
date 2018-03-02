import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default class NewAlbumView extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    const { addAlbum, navigation: { navigate } } = this.props;
    return(
      <View>
        <TextInput
          placeholder="Enter Roll Name."
          onChangeText={ (text) => this.setState({ text }) }
          value={ this.state.text }
        />
        <TouchableOpacity
          onPress={ () => addAlbum(this.state.text) }
        >
          <Text>Create New Album</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
