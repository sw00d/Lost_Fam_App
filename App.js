import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './rootNavigator'
import { store, persistor } from './src/store/index';


export default class App extends Component {
  render() {
    // TODO: need to add Loading view component
    // console.log(store)
    return (
      <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
