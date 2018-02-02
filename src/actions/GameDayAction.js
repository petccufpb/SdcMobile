/**
 * @description ActionsCreators referentes ao game day
 */

import firebase from 'firebase';

import {
  GET_GAME_DAY,
  GET_GAME_DAY_GAMES,
  ERROR_GET_GAME_DAY,
  GET_GAME_DAY_GAMES_SUCCESS
} from './types';
import { REF_DB_GAME_DAY, REF_DB_GAME_DAY_GAMES } from './refDatabase';

export const getGameDay = () => {  
  let gameday = {};
  return dispatch => {    
    firebase.database().ref(REF_DB_GAME_DAY).once('value', snapshot => {
      gameday = snapshot.val();    
    })
      .then(() => dispatch({ type: GET_GAME_DAY, payload: gameday }))
      .catch(error => dispatch({ type: ERROR_GET_GAME_DAY, payload: error.message }));
  }
};

export const getGameDayGames = () => {  
  let games = [];
  return dispatch => {    
    dispatch({ type: GET_GAME_DAY_GAMES, payload: true });
    firebase.database().ref(REF_DB_GAME_DAY_GAMES).once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        games.push(childSnapshot.val());
      });    
    })
      .then(() => dispatch({ type: GET_GAME_DAY_GAMES_SUCCESS, payload: games }))
      .catch(error => dispatch({ type: ERROR_GET_GAME_DAY, payload: error.message }));
  }
};