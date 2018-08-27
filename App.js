import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RootNavigator from './rootNavigator'
import configureStore from './src/store/index';
import { authenticateUser } from './src/store/actions/user_actions';


export default class App extends Component {
  constructor(props) {
     super(props);


     const { persistor, store } = configureStore();

     this.persistor = persistor;
     this.store = store;

     this.state = {
         showAuth: true
     }
 }

  render() {
    return (
      <Provider store={ this.store }>
        <PersistGate loading={null} persistor={ this.persistor }>
          <RootNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
