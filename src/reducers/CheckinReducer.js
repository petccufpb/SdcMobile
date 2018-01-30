import {
  GET_USER_CHECKIN,
  GET_USER_CHECKIN_SUCCESS,
  GET_USER_CHECKIN_ERROR,
  CLEAN_FIELDS,
  TOGGLE_QRCODE_SCANNER
} from '../actions/types';

const INITIAL_STATE = {
  checkin: false,
  error: "",
  loading: false,
  qrIsOpen: false,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_USER_CHECKIN:
      return { ...state, loading: action.payload, error: "" };
    case GET_USER_CHECKIN_SUCCESS:
      return { ...state, checkin: action.payload, error: "", loading: false, qrIsOpen: false };
    case GET_USER_CHECKIN_ERROR:
      return { ...state, error: action.payload, loading: false, checkin: false, qrIsOpen: false };
    case CLEAN_FIELDS:
      return INITIAL_STATE;
    case TOGGLE_QRCODE_SCANNER:
      return { ...state, qrIsOpen: action.payload };
    default:
      return state;
  }
}