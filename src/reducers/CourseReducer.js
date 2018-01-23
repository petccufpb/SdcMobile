/**
 * @description Reducers referentes aos courses do sistema
 */

import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  ERROR_GET_COURSES
} from '../actions/types';

const INITIAL_STATE = {
  courses: [],
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_COURSES:
      return { ...state, loading: action.payload };
    case GET_COURSES_SUCCESS:
      return { ...state, courses: action.payload, error: "", loading: false };
    case ERROR_GET_COURSES:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}