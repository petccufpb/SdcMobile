/**
 * @description ActionsCreators referentes aos cursos do sistema
 */

import firebase from 'firebase';
import {
  GET_SPEAKER,
  GET_SPEAKER_SUCCESS,
  ERROR_GET_SPEAKER
} from './types';

import { REF_DB_SPEAKERS } from './refDatabase';

export const getSpeaker = speakerID => {
  let speaker = {};
  return dispatch => {
    dispatch({ type: GET_SPEAKER, payload: true })
    firebase.database().ref(REF_DB_SPEAKERS + speakerID).once('value', snapshot => {
      speaker = snapshot.val();  
    })
      .then(() => dispatch({ type: GET_SPEAKER_SUCCESS, payload: speaker }))
      .catch(error => dispatch({ type: ERROR_GET_SPEAKER, payload: error.message }));
  }
}
