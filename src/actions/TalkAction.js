/**
 * @description ActionsCreators referentes as palestras do sistema
 */

import firebase from 'firebase';
import {
  GET_TALKS,
  ERROR_GET_TALKS,
  GET_TALKS_SUCCESS,
  GET_ALL_TALKS,
  GET_ALL_TALKS_SUCCESS,
  ERROR_GET_ALL_TALKS
} from './types';
import { REF_DB_TALKS, REF_DB_TALKS_WEDNESDAY } from './refDatabase';

export const getTalks = () => {
  let talks = [];
  return dispatch => {
    dispatch({ type: GET_TALKS, payload: true })
    firebase.database().ref(REF_DB_TALKS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        talks.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_TALKS_SUCCESS, payload: talks }))
      .catch(error => dispatch({ type: ERROR_GET_TALKS, payload: error.message }));
  }
}

export const getAllTalks = () => {
  let talks = [];
  return dispatch => {
    dispatch({ type: GET_ALL_TALKS, payload: true })
    firebase.database().ref(REF_DB_TALKS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        talks.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_ALL_TALKS_SUCCESS, payload: talks }))
      .catch(error => dispatch({ type: ERROR_GET_ALL_TALKS, payload: error.message }));

    firebase.database().ref(REF_DB_TALKS_WEDNESDAY).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        talks.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_ALL_TALKS_SUCCESS, payload: talks }))
      .catch(error => dispatch({ type: ERROR_GET_ALL_TALKS, payload: error.message }));
  }
}