import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Animated, Easing } from 'react-native';
import {
  LoginStack,
  HomeStack,
  CourseStack
} from './stacks';

/* 
  Drawer Stack 
  Aqui fica as cenas do side menu
*/
const DrawerNav = DrawerNavigator(
  {
    home: { screen: HomeStack },
    course: { screen: CourseStack }
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
  drawerNav: { screen: DrawerNav }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig
  });

export default PrimaryNav;
