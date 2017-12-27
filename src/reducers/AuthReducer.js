/**
 * @description Reducers referentes a autenticacao no sistema
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_SUCCESSFUL,
  LOGIN_ERR
} from '../actions/types';

const INITIAL_STATE = {
  email: 'matheus@sdc.com',
  password: 'matheus123',
  loginError: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESSFUL:
      return { ...state, loginError: action.payload };
    case LOGIN_ERR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}