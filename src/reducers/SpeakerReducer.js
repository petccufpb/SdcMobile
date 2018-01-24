/**
 * @description Reducers referentes aos speakers do sistema
 */

import {
  GET_SPEAKER,
  GET_SPEAKER_SUCCESS,
  ERROR_GET_SPEAKER
} from '../actions/types';

const INITIAL_STATE = {
  speaker: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_SPEAKER:
      return { ...state, loading: action.payload };
    case GET_SPEAKER_SUCCESS:
      return { ...state, speaker: action.payload, error: "", loading: false };
    case ERROR_GET_SPEAKER:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}