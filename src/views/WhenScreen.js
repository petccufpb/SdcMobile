import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr-plus';
import { DayWithDescription } from '../components';
import { mainColor } from '../util';

const WIDTH = Dimensions.get('window').width;

export default class WhenScreen extends Component {
  static navigationOptions = {
    title: 'Quando',
    drawerLabel: 'Quando',
    headerStyle: { backgroundColor: '#212121', elevation: 5 },
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-calendar-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000'
          barStyle='light-content'
        />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <DayWithDescription
            color='#e6194b'
            day='05'
            title='Palestras'
            month='FEV'
            time='08:00 - 17:30'
            local='Auditório'
          />
        </View>
        <Hr color='gray' width={1} />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <DayWithDescription
            color='#3cb44b'
            day='06'
            title='Laboratórios'
            month='FEV'
            time='08:00 - 17:30'
            local='Auditório'
          />
        </View>
        <Hr color='gray' width={1} />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <DayWithDescription
            color='#911eb4'
            day='07'
            title='Palestras / Maratona'
            month='FEV'
            time='08:00 - 17:30'
            local='Auditório'
          />
        </View>
        <Hr color='gray' width={1} />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <DayWithDescription
            color='#0082c8'
            day='08'
            title='Minicursos'
            month='FEV'
            time='08:00 - 17:00'
            local='Auditório'
          />
        </View>
        <Hr color='gray' width={1} />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <DayWithDescription
            color='#f58231'
            day='09'
            title='GameDay'
            month='FEV'
            time='08:00 - 12:00'
            local='Auditório'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#303030'
  },
});