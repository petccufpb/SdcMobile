import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class CourseScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Minicursos',
    drawerLabel: 'Minicursos',
    drawerIcon: () => (
      <Icon name="code" size={20} color={mainColor}/>
    )
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