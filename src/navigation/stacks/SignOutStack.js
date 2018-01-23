/**
 * @description Stack das cenas pertencentes à navegação do Login
 */

import { StackNavigator } from "react-navigation";

import LoginScreen from '../../views/LoginScreen';
import SignupScreen from '../../views/SignupScreen';
import { mainColor } from '../../util/';
/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
export const SignOutStack = StackNavigator({
  login: { screen: LoginScreen },
  signup: { screen: SignupScreen }
  // ...
}, {
  // Setup
  headerMode: 'float',
  navigationOptions: {
    headerStyle: { backgroundColor: mainColor },
    title: 'Semana da Computação',
    headerTintColor: 'white',
  }
});