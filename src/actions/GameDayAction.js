/**
 * @description ActionsCreators referentes ao game day
 */

import firebase from 'firebase';

import {
  GET_GAME_DAY,
  ERROR_GET_GAME_DAY
} from './types';
import { REF_DB_GAME_DAY } from './refDatabase';

export const getGameDay = () => {  
  let gameday = {};
  return dispatch => {    
    firebase.database().ref(REF_DB_GAME_DAY).once('value', snapshot => {
      gameday = snapshot.val();    
    })
      .then(() => dispatch({ type: GET_GAME_DAY, payload: gameday }))
      .catch(error => dispatch({ type: ERROR_GET_GAME_DAY, payload: error.message }));
  }
}
