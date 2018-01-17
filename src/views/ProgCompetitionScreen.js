import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../util';

export default class ProgCompetitionScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Maratona',
    drawerLabel: 'Maratona de programação',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="medal" size={20} color={focused ? mainColor : 'gray'} />
    )
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="medal" size={120} color={mainColor} />
            <Text style={styles.title}>Maratona de Programação</Text>
            <Text style={styles.subtitle}>Quarta - 07/02, às 8:00h</Text>
            <Text style={styles.subtitle}>Local: </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{about}</Text>
            <View style={styles.button}>
              <Button color={mainColor} onPress={() => Linking.openURL(urlEdital)} title="Edital" />
              <Button color={mainColor} onPress={() => Linking.openURL(urlForm)} title="Participar" />
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
    alignItems: 'center',
    backgroundColor: 'white',
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
    textAlign: 'justify',
  },
  button: {
    marginTop: 30
  }
});

const urlEdital = "https://goo.gl/XskpVb";
const urlForm = "https://goo.gl/forms/KkhgC9IKYpty41743";
const about = "A maratona é um evento organizado pelo clube de maratona de programação " +
  "UFPB em conjunto ao PET.com, ele segue os moldes das maratonas e olimpíadas de " +
  "programação tradicionais e acontecerá dentro da Semana da Computação. A " +
  "maratona de programação da SDC tem como objetivo despertar nos alunos do Centro de " +
  "Informática o interesse por programação, para isso provas conta com problemas " +
  "desafiantes que estimulam a competição entre os alunos. O evento conta com dois níveis " +
  "de prova (iniciante e avançado) para tornar mais justa a competição entre todos os níveis " +
  "de alunos do CI.";