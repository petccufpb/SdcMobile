/**
 * @description Reducers referentes as palestras do sistema
 */

import {
  GET_TALKS,
  GET_TALKS_SUCCESS,
  ERROR_GET_TALKS
} from '../actions/types';

const INITIAL_STATE = {
  talks: [],
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_TALKS:
      return { ...state, loading: true };
    case GET_TALKS_SUCCESS:
      return { ...state, talks: action.payload, error: "", loading: false };
    case ERROR_GET_TALKS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}