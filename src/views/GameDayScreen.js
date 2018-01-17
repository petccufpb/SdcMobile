import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class GameDayScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Game Day',
    drawerLabel: 'Game Day',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="game-controller" size={20} color={focused ? mainColor : 'gray'} />
    )
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="game-controller" size={120} color={mainColor} />
            <Text style={styles.title}>Game Day</Text>
            <Text style={styles.subtitle}>Sexta - 09/02, às 8:00h</Text>
            <Text style={styles.subtitle}>Local: </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{about}</Text>
            <View style={styles.button}>
              <Button color={mainColor} onPress={() => Linking.openURL(urlLol)} title="Participar do Campeonato X1 LOL" />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    marginTop: 10,
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    marginHorizontal: 10
  },
  title: {
    fontSize: 25,
    color: mainColor,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'gray'
  },
  text: {
    fontSize: 17,
    textAlign: 'justify',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  }
});
const urlLol = "http://www.google.com";
const about = "O game day é o último dia do evento, feito para relaxar e se divertir com a galera! " +
  "O game day contará com muitas brincadeiras e jogos, além de alguns campeonatos dos jogos mais famosos! " +
  "Para participar dos campeonatos é necessário realizar sua inscrição com antecedência.";