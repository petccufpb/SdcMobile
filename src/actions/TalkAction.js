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
  ERROR_GET_ALL_TALKS,
  GET_ALL_TALKS_AND_SPEAKER
} from './types';
import { REF_DB_TALKS, REF_DB_TALKS_WEDNESDAY } from './refDatabase';
import { REF_DB_SPEAKERS } from "../actions/refDatabase";

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

export const getAllTalksAndSpeakers = () => {
  let allTalks = [];
  let speakers = [];

  return dispatch => {
    dispatch({ type: GET_ALL_TALKS, payload: true })
    firebase.database().ref(REF_DB_TALKS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        allTalks.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_ALL_TALKS_SUCCESS, payload: allTalks }))
      .catch(error => dispatch({ type: ERROR_GET_ALL_TALKS, payload: error.message }));

    firebase.database().ref(REF_DB_TALKS_WEDNESDAY).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        allTalks.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_ALL_TALKS_SUCCESS, payload: allTalks }))
      .catch(error => dispatch({ type: ERROR_GET_ALL_TALKS, payload: error.message }));

    firebase.database().ref(REF_DB_SPEAKERS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        speakers.push(childSnapshot.val());
      });
    })
      .then(() => dispatch({ type: GET_ALL_TALKS_AND_SPEAKER, payload: { allTalks, speakers }}))
      .catch(error => dispatch({ type: ERROR_GET_ALL_TALKS, payload: error.message }));
  }
}