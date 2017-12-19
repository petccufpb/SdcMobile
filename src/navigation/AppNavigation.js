import { StackNavigator, DrawerNavigator } from "react-navigation";
import {
  LoginStack,
  HomeStack,
  CourseStack
} from './stacks';

/* 
  Drawer Stack 
  Aqui fica as cenas do side menu
*/
const DrawerNav = DrawerNavigator({
  home: { screen: HomeStack },
  course: { screen: CourseStack }
});

/* Main Navigation */
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerNav: { screen: DrawerNav }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerNav'
  });

export default PrimaryNav;
