/**
 * @description Stack das cenas pertencentes à navegação do Home
 */
import React from "react";
import { StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../../views/HomeScreen";
import { mainColor } from "../../util";

const navOptions = ({ navigation }) => ({
  title: 'Programação',
  headerTitleStyle: {
    fontFamily: 'Roboto-Light',
    fontWeight: 'normal',
  },
  drawerIcon: ({ focused, tintColor }) => (
    <Icon name='ios-clock-outline' size={40} color={focused ? 'white' : 'gray'} />
  ),
  headerStyle: { backgroundColor: '#212121', elevation: 0 },
  headerTintColor: 'white',
  headerLeft: <Icon.Button name='ios-menu-outline' color={'white'} backgroundColor={'#212121'} onPress={() =>
    navigation.navigate('DrawerToggle')} />,
});

/* Controle de navegacao para o menu Home */
export const HomeStack = StackNavigator({
  home: { screen: HomeScreen }
}, {
    navigationOptions: navOptions
  });