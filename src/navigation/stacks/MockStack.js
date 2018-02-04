/**
 * @description Stack das cenas pertencentes à navegação do Login
 */

import { StackNavigator } from "react-navigation";

import MockScreen from '../../views/MockScreen';
/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
export const MockStack = StackNavigator({
  mockScreen: { screen: MockScreen },
  // ...
}, {
  // Setup
  headerMode: 'float',
  navigationOptions: {
    title: 'Semana da Computação',
    headerTintColor: 'white',
  }
});