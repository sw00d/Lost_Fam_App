import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

// import Thunk from 'redux-thunk';
import RootNavigator from './rootNavigator'
import { store, persistor } from './src/store';
// const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)(reducers);


export default class App extends Component {
  render() {
    // TODO: need to add Loading view component
    return (
      <Provider store={ store }>
        <PersistGate loading={() => <Text>Loading!</Text>} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
