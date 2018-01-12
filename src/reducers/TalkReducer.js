/**
 * @description Reducers referentes as palestras do sistema
 */

import {
  GET_TALKS,
  ERROR_GET_TALKS
} from '../actions/types';

const INITIAL_STATE = {
  talks: [],
  error: ""
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_TALKS:
      return { ...state, talks: action.payload, error: "" };
    case ERROR_GET_TALKS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}