import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SplashScreen from 'react-native-splash-screen'
import { NavigationActions } from 'react-navigation';

import reducers from './src/reducers';
import { configFirebase } from './src/util';
import ReduxNavigation from './src/navigation/ReduxNavigation';
import { INIT_AUTH } from './src/actions/types';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(configFirebase);
  }

  /**
  * check to see if the user has signed in already or not
  */
  initAuth(dispatch) {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebase.auth().onAuthStateChanged(
        authUser => {
          dispatch({ type: INIT_AUTH, payload: authUser });
          unsubscribe();
          resolve(authUser);
        },
        error => reject(error)
      );
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    this.initAuth(store.dispatch)
      .then(authUser => {
        if(authUser) {
          store.dispatch(NavigationActions.navigate({routeName: 'drawerStack'}));
        }
        SplashScreen.hide();
      })
      .catch(error => {SplashScreen.hide(); console.error(error)});
    return (
      <Provider store={store}>
        <ReduxNavigation />
      </Provider>
    );
  }
}
