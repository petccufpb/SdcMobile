/**
 * @description Stack das cenas pertencentes à navegação do Mapa do Ci
 */

import { StackNavigator } from "react-navigation";

import CiMapScreen from "../../views/CiMapScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Mapa do Ci */
export const CiMapStack = StackNavigator({
  cimap: { screen: CiMapScreen }
}, {
    navigationOptions: NavOptions
});