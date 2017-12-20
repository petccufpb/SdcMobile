/**
 * @description Stack das cenas pertencentes à navegação do Checkin
 */

import { StackNavigator } from "react-navigation";

import CheckinScreen from "../../views/CheckinScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Checkin */
export const CheckinStack = StackNavigator({
  checkin: { screen: CheckinScreen }
}, {
    navigationOptions: NavOptions
});