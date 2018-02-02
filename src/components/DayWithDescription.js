import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default props => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ backgroundColor: props.color, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
      <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'white' }}>{props.day}</Text>
      <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'white' }}>{props.month}</Text>
    </View>
    <View style={{ marginLeft: 20, backgroundColor: '#303030', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
      <Text style={{ fontFamily: 'Roboto-Regular', color: 'white', fontSize: 16, fontWeight: 'bold' }}>{props.title}</Text>
      <Text style={{ fontFamily: 'Roboto-Regular', color: 'white' }}>Horário: {props.time} </Text>
      <Text style={{ fontFamily: 'Roboto-Regular', color: 'white' }}>Local: {props.local}</Text>
    </View>
  </View>
);