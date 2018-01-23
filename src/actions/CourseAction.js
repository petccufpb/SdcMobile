/**
 * @description ActionsCreators referentes aos cursos do sistema
 */

import firebase from 'firebase';
import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  ERROR_GET_COURSES
} from './types';

import { REF_DB_COURSES } from './refDatabase';

export const getCourses = () => {
  let courses = [];
  return dispatch => {
    dispatch({ type: GET_COURSES, payload: true })
    firebase.database().ref(REF_DB_COURSES).orderByChild("time").once('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        courses.push(childSnapshot.val());
      });      
    })
      .then(() => dispatch({ type: GET_COURSES_SUCCESS, payload: courses }))
      .catch(error => dispatch({ type: ERROR_GET_COURSES, payload: error.message }));
  }
}
