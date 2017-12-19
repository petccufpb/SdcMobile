import { StackNavigator, DrawerNavigator } from "react-navigation";
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import CourseScreen from "../views/CourseScreen";
import HomeScreen from "../views/HomeScreen";
import CenaLogin from "../views/CenaLogin";

/* 
  Login Stack 
  Obs: this part doesn`t have access to the side menu
*/
const LoginStack = StackNavigator(
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
  });

/* Config default para os nav de cada page */
const navOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: '#4C3E54' },
  title: 'Bem-vindo!',
  headerTintColor: 'white',
  headerLeft: <Icon.Button name="menu" backgroundColor="#4C3E54" onPress={() =>
    navigation.navigate('DrawerToggle')}/>
});

/* Controle de navegacao para o menu Home */
const HomeStack = StackNavigator(
  {
    home: { screen: HomeScreen }
  }, {
    navigationOptions: navOptions
  }
);

/* Controle de navegacao para o menu Course */
const CourseStack = StackNavigator(
  {
    course: { screen: CourseScreen }
  }, {
    navigationOptions: navOptions
  }
);

/* 
  Drawer Stack 
  Aqui fica as cenas do side menu
*/
const DrawerStack = DrawerNavigator({
  home: { screen: HomeStack },
  course: { screen: CourseStack }
});

/* Main Navigation */
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack'
  });

export default PrimaryNav;
