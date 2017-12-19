import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Semana da Computação',
    // headerLeft: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> HomeScreen.js </Text>
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