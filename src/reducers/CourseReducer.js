/**
 * @description Reducers referentes aos courses do sistema
 */

import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  ERROR_GET_COURSES,
  REGISTER_SUB_SUCCESS,
  REGISTER_SUB_ERROR,
  REGISTER_SUB_EXCEEDED,
} from '../actions/types';

const INITIAL_STATE = {
  courses: [],
  error: "",
  loading: false,
  reload: false,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_COURSES:
      return { ...state, loading: action.payload, reload: false, error: "" };
    case GET_COURSES_SUCCESS:
      return { ...state, courses: action.payload, error: "", loading: false };
    case ERROR_GET_COURSES:
      return { ...state, error: action.payload, loading: false };    
    case REGISTER_SUB_EXCEEDED:
      return { ...state, error: action.payload };
    case REGISTER_SUB_ERROR:
      return { ...state, error: action.payload };
    case REGISTER_SUB_SUCCESS:
      return { ...state, reload: true, error: "" };    
    default:
      return state;
  }
}