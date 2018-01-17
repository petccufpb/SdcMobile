/**
 * @description ActionsCreators referentes a maratona
 */

import firebase from 'firebase';
import {
  GET_PROG_COMPETITION,
  ERROR_GET_PROG_COMPETITION
} from './types';
import { REF_DB_PROG_COMPETITION } from './refDatabase';

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
