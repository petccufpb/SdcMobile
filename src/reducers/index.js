/**
 * @description export de todos os reducers do sistema
 */

 import { combineReducers } from "redux";

 import AuthReducer from "./AuthReducer";
 import NavReducer from "./NavReducer";
 import TalkReducer from "./TalkReducer";
 import ProgCompetitionReducer from "./ProgCompetitionReducer";
 import GameDayReducer from "./GameDayReducer";
 import CourseReducer from "./CourseReducer";
 import LabReducer from "./LabReducer";

 export default combineReducers({
  AuthReducer,
  NavReducer,
  TalkReducer,
  GameDayReducer,
  ProgCompetitionReducer,
  CourseReducer,
  LabReducer
 });