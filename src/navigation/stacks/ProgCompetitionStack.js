/**
 * @description Stack das cenas pertencentes à navegação do Maratona
 */

import { StackNavigator } from "react-navigation";

import ProgCompetitionScreen from "../../views/ProgCompetitionScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Maraton */
export const ProgCompetitionStack = StackNavigator({
  progcompetition: { screen: ProgCompetitionScreen }
}, {
    navigationOptions: NavOptions
});