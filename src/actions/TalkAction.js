/**
 * @description ActionsCreators referentes as palestras do sistema
 */

import firebase from 'firebase';
import {
  GET_TALKS,
  ERROR_GET_TALKS
} from './types';
import { REF_DB_TALKS } from './refDatabase';

export const getTalks = () => {
  let talks = [];
  return dispatch => {
    firebase.database().ref(REF_DB_TALKS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        console.log(childSnapshot.val());
        talks.push(childSnapshot.val());
      });      
    })
      .then(() => dispatch({ type: GET_TALKS, payload: talks }))
      .catch(error => dispatch({ type: ERROR_GET_TALKS, payload: error.message }));
  }
}
