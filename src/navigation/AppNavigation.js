import React from 'react';
import { StackNavigator, DrawerNavigator, } from "react-navigation";
import { Animated, Easing } from 'react-native';

import { SideMenu } from './components/';
import { mainColor } from '../util';
import {
  LoginStack,
  HomeStack,
  CourseStack
} from './stacks';

/* 
  Drawer Nav 
  Aqui fica as cenas do side menu
*/
const DrawerNav = DrawerNavigator({
  home: { 
    screen: HomeStack 
  },
  course: { 
    screen: CourseStack 
  },
}, 
{ // Config do drawer
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  headerMode: 'none',
  drawerWidth: 300,
  contentOptions: {
    activeTintColor: mainColor,
    inactiveTintColor: 'gray'
  },
  contentComponent: SideMenu
});

/* Fix bug: gesture voltava para tela de login */
const DrawerStack = StackNavigator({
  drawerNav: { screen: DrawerNav }
}, {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
);

/* Corrige bug visual quando passa da loginStack -> drawerNav */
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

/* Main Navigation */
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig,
  }
);

export default PrimaryNav;
