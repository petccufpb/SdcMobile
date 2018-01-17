/**
 * @description Reducers referentes ao game day
 */

import {
  GET_GAME_DAY,
  ERROR_GET_GAME_DAY
} from '../actions/types';

const INITIAL_STATE = {
  gameday: "",
  error: ""
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_GAME_DAY:
      return { ...state, gameday: action.payload, error: "" };  
    case ERROR_GET_GAME_DAY:
      return { ...state, error: action.payload };  
    default:
      return state;
  }
}