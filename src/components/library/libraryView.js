import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';

export default class LibraryView extends Component {

  updateActiveAlbum(idx) {
    const { navigation: { navigate }, activeAlbum } = this.props;
    navigate('camera');
    activeAlbum(idx);
  }
  deleteAlbum() {
    this.props.deleteAlbum();
  }

  render() {
    const { navigation: { navigate }, albums } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.topBanner} onPress={this.deleteAlbum.bind(this)}>
          <Text style={styles.title}>LIBRARY</Text>
          <TouchableOpacity onPress={() => navigate('newAlbum')} style={styles.icon} underlayColor='white'>
            <Ionicons name="md-add" size={32} color="white"/>
          </TouchableOpacity>
        </View>

        {
          albums.map((album, i) => {
            const { picsTaken, capacity, name } = album;
            return(
              <TouchableOpacity onPress={ () => this.updateActiveAlbum(i) } key={name} style={styles.row}>
                <Text style={styles.albText}>{ name }</Text>
                <Text style={styles.albText}>{ `${picsTaken} / ${capacity}` }</Text>
              </TouchableOpacity>
            )
          })
        }

        <View style={styles.bottomBanner}></View>
      </View>
    );
  }
}
