import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class CourseScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Minicursos',
    // headerLeft: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> CourseScreen.js </Text>
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