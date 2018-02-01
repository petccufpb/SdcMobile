import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { mainColor } from "../util";
import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
} from "./scheduleScreens";

export default TabHome = TabNavigator({
  Monday: {
    screen: Monday,
    navigationOptions: {
      tabBarLabel: 'Seg',
    
    }
  },
  Tuesday: {
    screen: Tuesday,
    navigationOptions: {
      tabBarLabel: 'Ter',
    }
  },
  Wednesday: {
    screen: Wednesday,
    navigationOptions: {
      tabBarLabel: 'Qua',
    }
  },
  Thursday: {
    screen: Thursday,
    navigationOptions: {
      tabBarLabel: 'Qui',
    }
  },
  Friday: {
    screen: Friday,
    navigationOptions: {
      tabBarLabel: 'Sex',
      headerTitleStyle: {
        fontFamily: 'Roboto-Light',
      },
    }
  },
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#f5f5f5',
      style: {
        backgroundColor: '#212121',
        elevation: 0,
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    },
  }
);