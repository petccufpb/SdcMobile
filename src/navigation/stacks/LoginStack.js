/**
 * @description Stack das cenas pertencentes à navegação do Login
 */

import { StackNavigator } from "react-navigation";

import CenaLogin from '../../views/CenaLogin';

/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
export default LoginStack = StackNavigator(
  {
    login: { screen: CenaLogin },
    // signupScreen, ...
  }, {
    // Setup
    headerMode: 'float',
    navigationOptions: {
      headerStyle: { backgroundColor: '#E73536' },
      title: 'Você não está logado no app',
      headerTintColor: 'white',
    }
  }
);