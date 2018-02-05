/**
 * @description Reducers referentes a autenticacao no sistema
 */

import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN_SUCCESSFUL,
  LOGIN_ERR,
  CLEAN_FIELDS,
  INIT_AUTH,
  CLEAR_LOGIN_ERR
} from '../actions/types';

const INITIAL_STATE_DEV = {
  name: '',
  email: 'matheus@sdc.com',
  password: 'matheus123',
  loginError: '',
  authUser: null
};

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  loginError: '',
  authUser: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESSFUL:
      return { state: INITIAL_STATE };
    case LOGIN_ERR:
      return { ...state, loginError: action.payload };
    case CLEAN_FIELDS:
      return { state: INITIAL_STATE }
    case CLEAR_LOGIN_ERR:
      return { ...state, loginError: '' };
    case INIT_AUTH:
      return { ...state, authUser: action.payload }
    default:
      return state;
  }
}