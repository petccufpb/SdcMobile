/**
 * @description Reducers referentes a maratona de programacao
 */

import {
  GET_PROG_COMPETITION,
  ERROR_GET_PROG_COMPETITION,
  GET_TALKS_WEDNESDAY,
  GET_TALKS_WEDNESDAY_SUCCESS,
  GET_TALKS_WEDNESDAY_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  progCompetition: "",
  talks: [],
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_PROG_COMPETITION:
      return { ...state, progCompetition: action.payload, error: "" };
    case ERROR_GET_PROG_COMPETITION:
      return { ...state, error: action.payload };
    case GET_TALKS_WEDNESDAY:
      return { ...state, loading: true };
    case GET_TALKS_WEDNESDAY_SUCCESS:
      return { ...state, talks: action.payload, error: "", loading: false };
    case GET_TALKS_WEDNESDAY_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}