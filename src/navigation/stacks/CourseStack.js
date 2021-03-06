/**
 * @description Stack das cenas pertencentes à navegação do Minicurso
 */

import { StackNavigator } from "react-navigation";

import CourseScreen from "../../views/CourseScreen";
import PaymentCourseScreen from "../../views/PaymentCourseScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Minicurso */
export const CourseStack = StackNavigator({
  course: { screen: CourseScreen },
  payment: { screen: PaymentCourseScreen }
}, {
  navigationOptions: NavOptions
});