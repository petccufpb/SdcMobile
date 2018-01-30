/**
 * @description ActionsCreators referentes aos cursos do sistema
 */

import firebase from 'firebase';
import {
  GET_COURSES,
  GET_COURSES_SUCCESS,
  ERROR_GET_COURSES,
  REGISTER_SUB_SUCCESS,
  REGISTER_SUB_ERROR,
  REGISTER_SUB_EXCEEDED,
  CLEAN_FIELDS,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR
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

export const registerCourseSubscriber = course => {
  const currentUser = firebase.auth().currentUser;
  const courseRef = firebase.database().ref().child(REF_DB_COURSES + course.key);
  const courseSubsRef = courseRef.child("subs");
  const courseVacanciesRef = courseRef.child("vacancies");

  return dispatch => {
    courseVacanciesRef.transaction(vacancies => {
      if (vacancies != null) {
        if (vacancies > 0) {
          return vacancies - 1;
        }
        else {
          console.log('Número de vagas esgotado.');
          return;
        }
      }
      return 0;
    }, (error, committed) => {
      if (error) {
        dispatch({ type: REGISTER_SUB_ERROR, payload: error.message });
      }
      else if (!committed) {
        dispatch({ type: REGISTER_SUB_EXCEEDED, payload: "Número de vagas esgotado." });
      }
      else {
        courseSubsRef.child(currentUser.uid).set({ paid: false })
          .then(() => dispatch({ type: REGISTER_SUB_SUCCESS, payload: true }))
          .catch(error => dispatch({ type: REGISTER_SUB_ERROR, payload: error.message }));
      }
    }, true);
  }
}

export const unregisterCourseSubscriber = course => {
  const currentUser = firebase.auth().currentUser;
  const courseRef = firebase.database().ref().child(REF_DB_COURSES + course.key);
  const courseSubsRef = courseRef.child("subs");
  const courseVacanciesRef = courseRef.child("vacancies");

  return dispatch => {
    courseVacanciesRef.transaction(vacancies => {
      if (vacancies != null) {
        return vacancies + 1;
      }
      return 0;
    }, (error, committed) => {
      if (error) {
        dispatch({ type: REGISTER_SUB_ERROR, payload: error.message });
      }
      else {
        courseSubsRef.child(currentUser.uid).set(null)
          .then(() => dispatch({ type: REGISTER_SUB_SUCCESS, payload: true }))
          .catch(error => dispatch({ type: REGISTER_SUB_ERROR, payload: error.message }));
      }
    }, true);
  }
}

export const payCourse = (paymentKey, course) => {
  const currentUser = firebase.auth().currentUser;
  const courseRef = firebase.database().ref().child(REF_DB_COURSES + course.key);
  const courseSubsRef = courseRef.child("subs");

  return dispatch => {
    if (paymentKey === PAYMENT_KEY) {
      courseSubsRef.child(currentUser.uid).set({ paid: true })
      .then(() => dispatch({ type: PAYMENT_SUCCESS, payload: true }))
      .catch(error => dispatch({ type: PAYMENT_ERROR, payload: error.message }));
    }
    else {
      dispatch({ type: PAYMENT_ERROR, payload: "O QRCode está incorreto!" });
    }
  }
}
export const cleanFields = () => {
  return { type: CLEAN_FIELDS };
}
const PAYMENT_KEY = "payment-course"