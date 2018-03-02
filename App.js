import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraDiv from './components/camera.js';
import Library from './components/library/library.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        < Library />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
