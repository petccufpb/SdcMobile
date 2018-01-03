/**
 * @description Stack das cenas pertencentes à navegação do Login
 */

import { StackNavigator } from "react-navigation";

import CenaLogin from '../../views/CenaLogin';
import SignupScreen from '../../views/SignupScreen';

/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
export const SignOutStack = StackNavigator({
  login: { screen: CenaLogin },
  signup: { screen: SignupScreen }
  // ...
}, {
  // Setup
  headerMode: 'float',
  navigationOptions: {
    headerStyle: { backgroundColor: '#E73536' },
    title: 'Você não está logado no app',
    headerTintColor: 'white',
  }
});