/**
 * @description Stack das cenas pertencentes à navegação do Login
 */

import { StackNavigator } from "react-navigation";

import SetupLoginScreen from '../../views/LoginScreen';
import SignupScreen from '../../views/SignupScreen';
import SetupLogin from "../../views/SetupLogin";
import { mainColor } from '../../util/';
/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
export const SignOutStack = StackNavigator({
  setup: { screen: SetupLoginScreen },
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