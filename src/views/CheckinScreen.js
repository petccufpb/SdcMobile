import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../util';

export default class CheckinScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Check-in',
    drawerLabel: 'Check-in',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-qr-scanner-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> CheckinScreen.js </Text>
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