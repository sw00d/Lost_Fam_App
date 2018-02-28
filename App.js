import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Thunk from 'redux-thunk';
import Camera from './src/components/camera.js';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStoreWithMiddleware }>
        <View style={styles.container}>
          <Camera />
        </View>
      </Provider>
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
