import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { mainColor } from '../util';

export default class WhenScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCelendar: false,
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderCelendar: true }) }, 0);
  }

  static navigationOptions = {
    title: 'Quando',
    drawerLabel: 'Quando',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-calendar-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    const { renderCelendar } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Text style={{ marginVertical: 15, fontFamily: 'Rancho-Regular', fontSize: 25, color: 'gray' }}>Faltam 6 dias</Text>
        </View>
        { !renderCelendar &&
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        }
        { renderCelendar &&
          <CalendarList
            minDate={'2018-02-01'}
            maxDate={'2018-02-28'}
            styles={{ width: Dimensions.get('window').width }}
            markedDates={
              {
                '2018-02-05': { startingDay: true, color: '#691a99', textColor: '#68efad' },
                '2018-02-06': { selected: true, color: '#691a99', textColor: '#68efad' },
                '2018-02-07': { selected: true, color: '#691a99', textColor: '#68efad' },
                '2018-02-08': { selected: true, color: '#691a99', textColor: '#68efad' },
                '2018-02-09': { disabled: true, color: '#691a99', textColor: '#68efad', endingDay: true }
              }}
            // Date marking style [simple/period/multi-dot]. Default = 'simple'
            markingType={'period'}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});