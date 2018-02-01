import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../util';

export default class SpeakerScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Palestrantes',
    drawerLabel: 'Palestrantes',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-mic-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SpeakerScreen.js</Text>
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