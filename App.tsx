import React, { Component } from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/components/AppNavigator';
import Store from './src/redux/Store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    );
  }
}
