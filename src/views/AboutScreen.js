import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sobre',
    drawerLabel: 'Sobre',
    drawerIcon: ({focused, tintColor}) => (
      <Icon name="info-with-circle" size={20} color={focused ? mainColor : 'gray'}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> AboutScreen.js </Text>
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