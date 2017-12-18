import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View } from 'react-native';

import reducers from './src/reducers';
import { configFirebase } from './src/util';
import CenaLogin from './src/views/CenaLogin';

export default class App extends Component<{}> {

  componentWillMount() {    
    firebase.initializeApp(configFirebase);    
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <CenaLogin />
      </Provider>
    );
  }
}
