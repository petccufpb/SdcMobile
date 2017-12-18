/**
 * @description ActionsCreators referentes a autenticacao no sistema
 */

import firebase from 'firebase';
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
      .then(user => dispatch({ type: LOGIN_SUCCESSFUL, payload: 'Sucesso ao fazer Login' }))
      .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
  }
}
