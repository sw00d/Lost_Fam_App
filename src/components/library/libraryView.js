import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';

const LibraryView = ({ navigation: { navigate }}) => (
  <View style={styles.container} >
      <View style={styles.topBanner}>
        <Text style={styles.title}>LIBRARY</Text>
        <TouchableOpacity
          onPress={ () => navigate('newAlbum') }
          style={styles.icon}
          underlayColor='white'
        >
          <Ionicons name="md-add" size={32} color="white" />
        </TouchableOpacity>
      </View>

    <View style={styles.row}>
      <Text style={styles.albText}>Album Name</Text>
      <Text style={styles.albText}>0/10</Text>
    </View>

    <View style={styles.bottomBanner}>
    </View>
  </View>
);

export default LibraryView;
