import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';
import mapStyle from '../../assets/themes/silver';

import { mainColor } from '../util';

export default class FindUsScreen extends Component {
  constructor(props) {
    super(props);

    this.coordinate = { latitude: -7.162287, longitude: -34.817208 };
  }

  static navigationOptions = {
    title: 'Onde',
    drawerLabel: 'Onde',
    headerStyle: { backgroundColor: '#212121', elevation: 5 },
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
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          region={{
            latitude: -7.162287,
            longitude: -34.817208,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            title='Centro de Informática - UFPB'
            description='R. dos Escoteiros, s/n - Mangabeira, João Pessoa - PB, 58055-000'
            coordinate={{ latitude: -7.162287, longitude: -34.817208 }}
            pinColor='#D500F9' />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
