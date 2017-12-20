import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Configurações',
    drawerLabel: 'Configurações',
    drawerIcon: ({focused, tintColor}) => (
      <Icon name="cog" size={20} color={focused ? mainColor : 'gray'}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> SettingsScreen.js </Text>
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