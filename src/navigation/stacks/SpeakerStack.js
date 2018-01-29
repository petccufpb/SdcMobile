/**
 * @description Stack das cenas pertencentes à navegação do Sobre
 */

import { StackNavigator } from "react-navigation";

import SpeakerScreen from "../../views/SpeakerScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Sobre */
export const SpeakerStack = StackNavigator({
  about: { screen: SpeakerScreen }
}, {
    navigationOptions: NavOptions
});