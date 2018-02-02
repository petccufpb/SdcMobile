/**
 * @description ActionsCreators referentes a maratona
 */

import firebase from 'firebase';
import {
  GET_PROG_COMPETITION,
  ERROR_GET_PROG_COMPETITION,
  GET_TALKS_WEDNESDAY,
  GET_TALKS_WEDNESDAY_SUCCESS,
  GET_TALKS_WEDNESDAY_ERROR
} from './types';
import { REF_DB_PROG_COMPETITION, REF_DB_TALKS_WEDNESDAY } from './refDatabase';

export const getProgCompetition = () => {  
  let progCompetition = {};
  return dispatch => {    
    firebase.database().ref(REF_DB_PROG_COMPETITION).once('value', snapshot => {
      progCompetition = snapshot.val();      
    })
      .then(() => dispatch({ type: GET_PROG_COMPETITION, payload: progCompetition }))
      .catch(error => dispatch({ type: ERROR_GET_PROG_COMPETITION, payload: error.message }));
  }
}

export const getTalkWednesday = () => {
  let talks = [];
  return dispatch => {
    dispatch({ type: GET_TALKS_WEDNESDAY, payload: true })
    firebase.database().ref(REF_DB_TALKS_WEDNESDAY).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        talks.push(childSnapshot.val());
      });      
    })
      .then(() => dispatch({ type: GET_TALKS_WEDNESDAY_SUCCESS, payload: talks }))
      .catch(error => dispatch({ type: GET_TALKS_WEDNESDAY_ERROR, payload: error.message }));
  }
}