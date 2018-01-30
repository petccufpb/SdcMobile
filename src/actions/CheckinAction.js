import firebase from "firebase";

import {
  GET_USER_CHECKIN,
  GET_USER_CHECKIN_SUCCESS,
  GET_USER_CHECKIN_ERROR,
  CLEAN_FIELDS,
  TOGGLE_QRCODE_SCANNER
} from '../actions/types';
import { REF_DB_CHECKIN } from "./refDatabase";

const weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

export const checkinUser = checkinDay => {
  const currentUserUID = firebase.auth().currentUser.uid;
  const d = new Date().getDay();
  const currentDay = weekday[d];
  const _checkinDay = checkinDay.split('-')[1];
  const checkinRef = firebase.database().ref().child(REF_DB_CHECKIN + currentDay);

  return dispatch => {    
    if (currentDay === _checkinDay) {
      checkinRef.child(currentUserUID).set({ checkin: true })
        .then(() => dispatch({ type: GET_USER_CHECKIN_SUCCESS, payload: true }))
        .catch(error => dispatch({ type: GET_USER_CHECKIN_ERROR, payload: error.message }));      
    } else {
      dispatch({ type: GET_USER_CHECKIN_ERROR, payload: "O QRCode está incorreto!" });
    }
  }
}

export const getUserCheckin = () => {
  const d = new Date().getDay();
  const currentDay = weekday[d];
  const currentUserUID = firebase.auth().currentUser.uid;
  const checkinRef = firebase.database().ref().child(REF_DB_CHECKIN + currentDay);  

  return dispatch => {
    dispatch({ type: GET_USER_CHECKIN, payload: true });
    var ret = false;
    checkinRef.once('value', snapshot => {
      snapshot.forEach(child => {
        if (child.key === currentUserUID) {
          ret = true;
        }
      });      
    })
      .then(() => dispatch({ type: GET_USER_CHECKIN_SUCCESS, payload: ret }))
      .catch(error => dispatch({ type: GET_USER_CHECKIN_ERROR, payload: error.message }));    
  }
}

export const cleanFields = () => {
  return { type: CLEAN_FIELDS };
}

export const toggleQRCodeScanner = (turn) => {
  return { type: TOGGLE_QRCODE_SCANNER, payload: turn };
}