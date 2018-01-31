import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../util';

export default class FindUsScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Onde',
    drawerLabel: 'Onde',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-map-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        <Text> FindUsScreen.js </Text>
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