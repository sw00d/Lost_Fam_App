import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Thunk from 'redux-thunk';
import RootNavigator from './rootNavigator'
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore)(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStoreWithMiddleware }>
          <RootNavigator />
      </Provider>
    );
  }
}
