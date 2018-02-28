import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraDiv from './components/camera.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        < CameraDiv />
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
