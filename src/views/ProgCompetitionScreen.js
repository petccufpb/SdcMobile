import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Button, Linking } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

import { mainColor, buildStringDate, createAlert } from "../util";
import { getProgCompetition } from "../actions/ProgCompetitionAction";
import { ActivityIndicator } from "../components";

class ProgCompetitionScreen extends Component {
  constructor(props) {
    super(props);
    if (!this.props.progCompetition) {
      this.props.getProgCompetition();
    }
  }

  static navigationOptions = {
    title: "Maratona",
    drawerLabel: "Maratona de programação",
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="medal" size={20} color={focused ? mainColor : "gray"} />
    )
  }

  render() {
    const { 
      date, time, about, 
      local, urlEdital, urlForm,
      title, icon
    } = this.props.progCompetition;
    if (!this.props.progCompetition) {
      return <ActivityIndicator />;
    }
    if (this.props.error) {
      return <Text>{this.props.error}</Text>;
    }
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name={icon} size={120} color={mainColor} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{buildStringDate(date, time)}</Text>
            <Text style={styles.subtitle}>Local: {local}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{about}</Text>
            <View style={styles.button}>
              <Button 
                color={mainColor} 
                onPress={() => createAlert(
                  "Edital",
                  "Deseja abrir o edital?",
                  () => Linking.openURL(urlEdital),
                  () => false,
                  "Sim"
                )} 
                title="Edital" 
              />
              <Button 
                color={mainColor} 
                onPress={() => createAlert(
                  "Inscrição",
                  "Deseja abrir o formulário para inscrição?",
                  () => Linking.openURL(urlEdital),
                  () => false,
                  "Sim"
                )} 
                title="Participar" 
              />
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
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  },
  header: {
    marginTop: 10,
    alignItems: "center",
  },
  content: {
    marginTop: 20,
    marginHorizontal: 10
  },
  title: {
    fontSize: 25,
    color: mainColor,
    fontWeight: "bold"
  },
  subtitle: {
    color: "gray"
  },
  text: {
    fontSize: 17,
    textAlign: "justify",
  },
  button: {
    marginTop: 30,
    marginBottom: 10
  }
});

const mapStateToProps = state => ({
  progCompetition: state.ProgCompetitionReducer.progCompetition,
  error: state.ProgCompetitionReducer.error,
});
export default connect(mapStateToProps, { getProgCompetition })(ProgCompetitionScreen);