/**
 * @description Stack das cenas pertencentes à navegação do Sobre
 */

import { StackNavigator } from "react-navigation";

import AboutScreen from "../../views/AboutScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Sobre */
export const AboutStack = StackNavigator({
  about: { screen: AboutScreen }
}, {
    navigationOptions: NavOptions
});