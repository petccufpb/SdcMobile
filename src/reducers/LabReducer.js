/**
 * @description Reducers referentes aos labs do sistema
 */

import {
  GET_LABS,
  GET_LABS_SUCCESS,
  ERROR_GET_LABS
} from '../actions/types';

const INITIAL_STATE = {
  labs: [],
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_LABS:
      return { ...state, loading: action.payload };
    case GET_LABS_SUCCESS:
      return { ...state, labs: action.payload, error: "", loading: false };
    case ERROR_GET_LABS:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}