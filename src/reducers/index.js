/**
 * @description export de todos os reducers do sistema
 */

 import { combineReducers } from 'redux';

 import AuthReducer from './AuthReducer';
 import NavReducer from './NavReducer';

 export default combineReducers({
  AuthReducer,
  NavReducer
 });