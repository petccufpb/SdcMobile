/**
 * @description ActionsCreators referentes a autenticacao no sistema
 */

import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import Auth from '../config/auth';
import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_ERR,
  LOGIN_SUCCESSFUL,
  CLEAN_FIELDS,
  CLEAR_LOGIN_ERR
} from './types';
import { REF_DB_USERS } from './refDatabase';

export const changeName = text => {
  return {
    type: CHANGE_NAME,
    payload: text
  }
};

export const changeEmail = text => {
  return {
    type: CHANGE_EMAIL,
    payload: text
  }
};

export const changePassword = text => {
  return {
    type: CHANGE_PASSWORD,
    payload: text
  }
};

export const clearLoginError = () => ({ type: CLEAR_LOGIN_ERR });

export const loginWithFacebook = () => {
  return dispatch => {
    Auth.Facebook.login(['email', 'public_profile'])
      .then(data => {
        firebase.auth().signInWithCredential(firebase.auth.FacebookAuthProvider.credential(data.credentials.token))
          .then((user) => {
            const userId = firebase.auth().currentUser.uid;
            userModel.uid = userId;

            firebase.database().ref(REF_DB_USERS + userId).set(userModel)
              .then(user =>  dispatch(navToHome))
              .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
          })
          .catch(err => { dispatch({ type: LOGIN_ERR, payload: err.message }) });
      })
      .catch(err => { dispatch({ type: LOGIN_ERR, payload: err.message }) });
  }
};

export const loginUser = (email, password) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => true)
      .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
  }
}

export const createUser = (userModel, password) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(userModel.email, password)
      .then(user => registerUserDatabase(userModel, dispatch))
      .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
  }
}

const registerUserDatabase = (userModel, dispatch) => {
  var userId = firebase.auth().currentUser.uid;
  userModel.uid = userId;
  firebase.database().ref(REF_DB_USERS + userId).set(userModel)
    .then(user => true)
    .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
}

export const logoutUser = () => {
  return dispatch => {
    firebase.auth().signOut()
      .then(dispatch(navToLogin))
      .catch(err => dispatch({ type: LOGIN_ERR, payload: err.message }));
  }
}

export const cleanFields = () => {
  return {
    type: CLEAN_FIELDS,
    payload: ''
  }
}

const navToHome = NavigationActions.navigate({
  routeName: 'drawerStack'
});

const navToLogin = NavigationActions.navigate({
  routeName: 'signOutStack'
});