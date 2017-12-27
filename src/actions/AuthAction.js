/**
 * @description ActionsCreators referentes a autenticacao no sistema
 */

import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_ERR,
  LOGIN_SUCCESSFUL
} from './types';

export const changeEmail = text => {
  return {
    type: CHANGE_EMAIL,
    payload: text
  }
}

export const changePassword = text => {
  return {
    type: CHANGE_PASSWORD,
    payload: text
  }
}

export const loginUser = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch(navToHome))
      .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
  }
}

const navToHome = NavigationActions.navigate({
  routeName: 'drawerNav',
  params: {},
  action: NavigationActions.navigate({ routeName: 'home' })
});