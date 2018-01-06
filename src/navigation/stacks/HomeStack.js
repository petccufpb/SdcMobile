/**
 * @description Stack das cenas pertencentes à navegação do Home
 */
import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from "../../views/HomeScreen";
import { mainColor } from "../../util";

const navOptions = ({ navigation }) => ({
  title: 'Programação',
  drawerLabel: 'Programação',
  drawerIcon: ({focused, tintColor}) => (
    <Icon name="calendar" size={20} color={focused ? mainColor : 'gray'}/>
  ),
  headerStyle: { backgroundColor: mainColor },
  headerTintColor: 'white',
  headerLeft: <Icon.Button name="menu" backgroundColor={mainColor} onPress={() =>
    navigation.navigate('DrawerToggle')}/>
});

/* Controle de navegacao para o menu Home */
export const HomeStack = StackNavigator({
  home: { screen: HomeScreen }
}, {
  navigationOptions: navOptions
});