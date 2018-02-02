/**
 * @description Reducers referentes ao game day
 */

import {
  GET_GAME_DAY,
  GET_GAME_DAY_GAMES,
  GET_GAME_DAY_GAMES_SUCCESS,
  ERROR_GET_GAME_DAY
} from '../actions/types';

const INITIAL_STATE = {
  gameday: "",
  error: "",
  loading: false,
  games: []
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_GAME_DAY:
      return { ...state, gameday: action.payload, error: "" };
    case GET_GAME_DAY_GAMES:
      return { ...state, loading: action.payload };
    case GET_GAME_DAY_GAMES_SUCCESS:
      return { ...state, games: action.payload, loading: false, error: "" };
    case ERROR_GET_GAME_DAY:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};