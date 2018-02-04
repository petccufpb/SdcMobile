/**
 * @description Stack das cenas pertencentes à navegação do Checkin
 */

import { StackNavigator } from "react-navigation";

import ScheduleModalScreen from '../../views/scheduleScreens/SheduleModalScreen';
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Checkin */
export const ScheduleModalStack = StackNavigator({
  scheduleModal: { screen: ScheduleModalScreen }
}, {
    navigationOptions: NavOptions
});