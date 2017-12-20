/**
 * @description Stack das cenas pertencentes à navegação do Game day
 */

import { StackNavigator } from "react-navigation";

import GameDayScreen from "../../views/GameDayScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Game Day */
export const GameDayStack = StackNavigator({
  gameday: { screen: GameDayScreen }
}, {
    navigationOptions: NavOptions
});