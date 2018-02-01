import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr-plus';
import { mainColor } from '../util';

const WIDTH = Dimensions.get('window').width;

export default class WhenScreen extends Component {
  constructor(props) {
    super(props);

    this.data = [
      { date: '05/02/2018', title: 'Palestras', time: '08:00 - 17:30', where: 'Auditório' },
      { date: '06/02/2018', title: 'Feras', time: '08:00 - 17:30', where: 'Auditório' },
      { date: '07/02/2018', title: 'Maratona de Programação / Empreendedorismo', time: '08:00 - 17:30', where: 'Auditório' },
      { date: '08/02/2018', title: 'Minicursos', time: '08:00 - 17:30', where: 'Auditório' },
      { date: '09/02/2018', title: 'Gameday', time: '08:00 - 17:30', where: 'Auditório' },
    ];
  }

  static navigationOptions = {
    title: 'Quando',
    drawerLabel: 'Quando',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-calendar-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        <View style={{ flex: 0.1, justifyContent: 'center' ,backgroundColor: '#e0e0e0', flexDirection: 'column' }}>
          <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', paddingLeft: 16, fontSize: 18 }}>FEV 2018</Text>
        </View>
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#e6194b', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'white' }}>11</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'white' }}>Seg</Text>
          </View>
          <View style={{ marginLeft: 20, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 18, fontWeight: 'bold' }}>Palestras</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Horário: </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Local: Auditório</Text>
          </View>
        </View>
        <Hr color='#fff' width={1} />
        <View style={{ flex: 0.2, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#3cb44b', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'white' }}>11</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'white' }}>Seg</Text>
          </View>
          <View style={{ marginLeft: 20, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 18, fontWeight: 'bold' }}>Palestras</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Horário: </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Local: Auditório</Text>
          </View>
        </View>
        <Hr color='#fff' width={1} /><View style={{ flex: 0.2, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#ffe119', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'gray' }}>11</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'gray' }}>Seg</Text>
          </View>
          <View style={{ marginLeft: 20, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 18, fontWeight: 'bold' }}>Palestras</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Horário: </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Local: Auditório</Text>
          </View>
        </View>
        <Hr color='#fff' width={1} /><View style={{ flex: 0.2, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#0082c8', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'white' }}>11</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'white' }}>Seg</Text>
          </View>
          <View style={{ marginLeft: 20, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 18, fontWeight: 'bold' }}>Palestras</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Horário: </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Local: Auditório</Text>
          </View>
        </View>
        <Hr color='#fff' width={1} /><View style={{ flex: 0.2, flexDirection: 'row' }}>
          <View style={{ backgroundColor: '#f58231', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flex: 0.3 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 35, color: 'white' }}>11</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 18, color: 'white' }}>Seg</Text>
          </View>
          <View style={{ marginLeft: 20, backgroundColor: '#fff', justifyContent: 'center', flexDirection: 'column', flex: 0.7 }}>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 18, fontWeight: 'bold' }}>Palestras</Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Horário: </Text>
            <Text style={{ fontFamily: 'Roboto-Regular', color: 'gray' }}>Local: Auditório</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
});