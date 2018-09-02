import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RootNavigator from './rootNavigator'
import { store } from './src/store/index';
import { authenticateUser } from './src/store/actions/user_actions';


export default class App extends Component {

  render() {
    return (
      <Provider store={ store }>
          <RootNavigator />
      </Provider>
    );
  }
}
