/**
 * @description Stack das cenas pertencentes à navegação do Sobre
 */

import { StackNavigator } from "react-navigation";

import WhenScreen from "../../views/WhenScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Sobre */
export const WhenStack = StackNavigator({
  about: { screen: WhenScreen }
}, {
    navigationOptions: NavOptions
});