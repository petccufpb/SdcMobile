import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class GameDayScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Game Day',
    drawerLabel: 'Game Day',
    drawerIcon: ({focused, tintColor}) => (
      <Icon name="game-controller" size={20} color={focused ? mainColor : 'gray'}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> GameDayScreen.js </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});