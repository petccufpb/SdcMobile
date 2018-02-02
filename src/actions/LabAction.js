/**
 * @description ActionsCreators referentes aos labs do sistema
 */

import firebase from 'firebase';
import {
  GET_LABS,
  GET_LABS_SUCCESS,
  ERROR_GET_LABS
} from './types';

import { REF_DB_LABS } from './refDatabase';

export const getLabs = () => {
  let labs = [];
  return dispatch => {
    dispatch({ type: GET_LABS, payload: true })
    firebase.database().ref(REF_DB_LABS).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        labs.push(childSnapshot.val());
      });      
    })
      .then(() => dispatch({ type: GET_LABS_SUCCESS, payload: labs }))
      .catch(error => dispatch({ type: ERROR_GET_LABS, payload: error.message }));
  }
}
