/**
 * @description Reducers referentes a maratona de programacao
 */

import {
  GET_PROG_COMPETITION,
  ERROR_GET_PROG_COMPETITION
} from '../actions/types';

const INITIAL_STATE = {
  progCompetition: "",
  error: ""
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_PROG_COMPETITION:
      return { ...state, progCompetition: action.payload, error: "" };
    case ERROR_GET_PROG_COMPETITION:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}