import React from 'react';
import { StackNavigator, DrawerNavigator, } from "react-navigation";
import { Animated, Easing } from 'react-native';

import { SideMenu } from './components/';
import { mainColor } from '../util';
import {
  AboutStack,
  CheckinStack,
  CiMapStack,
  CourseStack,
  FaqStack,
  FindUsStack,
  GameDayStack,
  HomeStack,
  SignOutStack,
  ProgCompetitionStack,
  SettingsStack,
  TalkStack,
  WhenStack,
  SpeakerStack,
  ScheduleModalStack,
  MockStack,
} from './stacks';
/* 
  Drawer Nav 
  Aqui fica as cenas do side menu
*/
const DrawerNav = DrawerNavigator({
  home: { screen: HomeStack },
  when: { screen: WhenStack },
  findus: { screen: FindUsStack },
  // speaker: { screen: SpeakerStack },
  // talk: { screen: TalkStack },
  // course: { screen: CourseStack },
  // progcompetition: { screen: ProgCompetitionStack },
  // gameday: { screen: GameDayStack },
  checkin: { screen: CheckinStack },
  // cimap: { screen: CiMapStack },
  // faq: { screen: FaqStack },
  // about: { screen: AboutStack },
  // settings: { screen: SettingsStack },
}, 
{ // Config do drawer
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  headerMode: 'none',
  drawerWidth: 300,
  contentOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontFamily: 'Roboto-Light',
      fontSize: 20,
      fontWeight: 'normal',
    },
    iconContainerStyle: {
      width: 40
    }
  },
  drawerBackgroundColor: 'rgba(67, 27, 91, 0.95)',
  contentComponent: SideMenu
});

// rgba(105, 26, 153, 0.9)

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

/* Corrige bug visual quando passa da signOutStack -> drawerNav */
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

/* Main Navigation */
const PrimaryNav = StackNavigator({
  mockStack: { screen: MockStack },
  signOutStack: { screen: SignOutStack },
  drawerStack: { screen: DrawerStack },
  scheduleModal: { screen: ScheduleModalStack }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'mockStack',
    transitionConfig: noTransitionConfig,
  }
);

export default PrimaryNav;
