/**
 * @description export de todos os reducers do sistema
 */

import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';
import TalkReducer from './TalkReducer';
import ProgCompetitionReducer from './ProgCompetitionReducer';
import GameDayReducer from './GameDayReducer';
import LabReducer from './LabReducer';
import CourseReducer from './CourseReducer';
import CheckinReducer from './CheckinReducer';

export default combineReducers({
  AuthReducer,
  NavReducer,
  TalkReducer,
  GameDayReducer,
  ProgCompetitionReducer,
  LabReducer,
  CourseReducer,
  CheckinReducer,
});