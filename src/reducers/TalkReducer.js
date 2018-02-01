/**
 * @description Reducers referentes as palestras do sistema
 */

import {
  GET_TALKS,
  GET_TALKS_SUCCESS,
  ERROR_GET_TALKS,
  GET_ALL_TALKS,
  GET_ALL_TALKS_SUCCESS,
  ERROR_GET_ALL_TALKS
} from '../actions/types';

const INITIAL_STATE = {
  talks: [],
  allTalks: [],
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
    case GET_ALL_TALKS:
      return { ...state, loading: true };
    case GET_ALL_TALKS_SUCCESS:
      return { ...state, allTalks: action.payload, error: "", loading: false };
    case ERROR_GET_ALL_TALKS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}