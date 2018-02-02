import React, { Component } from 'react';
import { StatusBar, View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../util';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Sobre',
    drawerLabel: 'Sobre',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-information-circle-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000'
          barStyle='light-content'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030'
  }
});