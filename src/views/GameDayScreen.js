import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";

import { getGameDay } from "../actions/GameDayAction";
import { mainColor, buildStringDate } from '../util';
import { ActivityIndicator } from "../components";

class GameDayScreen extends Component {
  constructor(props) {
    super(props);
    if (!this.props.gameday) {
      this.props.getGameDay();
    }
  }

  static navigationOptions = {
    title: 'Game Day',
    drawerLabel: 'Game Day',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="game-controller" size={20} color={focused ? mainColor : 'gray'} />
    )
  }

  render() {
    console.log(this.props.gameday)
    const { about, date, local, time } = this.props.gameday;
    if (!this.props.gameday) {
      return <ActivityIndicator />;
    }
    if (this.props.error) {
      return <Text>{this.props.error}</Text>;
    }
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="game-controller" size={120} color={mainColor} />
            <Text style={styles.title}>Game Day</Text>
            <Text style={styles.subtitle}>{buildStringDate(date, time)}</Text>
            <Text style={styles.subtitle}>Local: {local}</Text>
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

const mapStateToProps = state => ({
  gameday: state.GameDayReducer.gameday,
  error: state.GameDayReducer.error,
});
export default connect(mapStateToProps, { getGameDay })(GameDayScreen);