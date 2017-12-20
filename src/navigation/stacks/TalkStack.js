/**
 * @description Stack das cenas pertencentes à navegação do Palestras
 */

import { StackNavigator } from "react-navigation";

import TalkScreen from "../../views/TalkScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Talk */
export const TalkStack = StackNavigator({
  talk: { screen: TalkScreen }
}, {
    navigationOptions: NavOptions
});