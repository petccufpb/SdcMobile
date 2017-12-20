/**
 * @description Stack das cenas pertencentes à navegação do Como chegar
 */

import { StackNavigator } from "react-navigation";

import FindUsScreen from "../../views/FindUsScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Como chegar */
export const FindUsStack = StackNavigator({
  findus: { screen: FindUsScreen }
}, {
    navigationOptions: NavOptions
});