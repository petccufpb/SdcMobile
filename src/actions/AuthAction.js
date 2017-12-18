import firebase from 'firebase';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD
} from './types';

export const changeEmail = text => {
  return {
    type: CHANGE_EMAIL,
    payload: text
  }
}

export const changePassword = text => {
  return {
    type: CHANGE_PASSWORD,
    payload: text
  }
}
