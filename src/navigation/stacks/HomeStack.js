/**
 * @description Stack das cenas pertencentes à navegação do Home
 */

import { StackNavigator } from "react-navigation";

import HomeScreen from "../../views/HomeScreen";
import NavOptions from "./NavOptions";

/* Controle de navegacao para o menu Home */
export default HomeStack = StackNavigator(
  {
    home: { screen: HomeScreen }
  }, {
    navigationOptions: NavOptions
  }
);