/**
 * @description Stack das cenas pertencentes à navegação do Faq
 */

import { StackNavigator } from "react-navigation";

import FaqScreen from "../../views/FaqScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Faq */
export const FaqStack = StackNavigator({
  faq: { screen: FaqScreen }
}, {
    navigationOptions: NavOptions
});