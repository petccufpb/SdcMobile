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
    course: { screen: CourseStack },
  }
);

/* Fix bug: gesture voltava para tela de login */
const DrawerStack = StackNavigator({
  drawerNav: { screen: DrawerNav }
},
  {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  }
});

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
