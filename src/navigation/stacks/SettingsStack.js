/**
 * @description Stack das cenas pertencentes à navegação do Config
 */

import { StackNavigator } from "react-navigation";

import SettingsScreen from "../../views/SettingsScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Settings */
export const SettingsStack = StackNavigator({
  settings: { screen: SettingsScreen }
}, {
    navigationOptions: NavOptions
});