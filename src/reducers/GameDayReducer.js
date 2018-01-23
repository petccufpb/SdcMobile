/**
 * @description Reducers referentes ao game day
 */

import {
  GET_GAME_DAY,
  GET_GAME_DAY_GAMES,
  ERROR_GET_GAME_DAY
} from '../actions/types';

const INITIAL_STATE = {
  gameday: "",
  error: "",
  games: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_GAME_DAY:
      return { ...state, gameday: action.payload, error: "" };
    case GET_GAME_DAY_GAMES:
      return { ...state, games: action.payload, error: "" };
    case ERROR_GET_GAME_DAY:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}