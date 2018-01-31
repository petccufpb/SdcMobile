import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, Linking, FlatList } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem,
  ActivityIndicator
} from "../../components/";

import { createAlert } from "../../util";
import { getProgCompetition, getTalkWednesday } from "../../actions/ProgCompetitionAction";

class Wednesday extends Component {
  constructor(props) {
    super(props);
    if (!this.props.progCompetition) {
      this.props.getProgCompetition();
    }
    if (this.props.talks.length === 0) {
      this.props.getTalkWednesday();
    }
  }

  openModal(talk) {
    if (talk.title === "Coffee Break" || talk.title === "Check-in"
      || talk.title === "Abertura - Boas-vindas aos feras")
      return false;

    this.props.navigation.navigate("scheduleModal", talk);
  }

  renderItem(talk) {
    if (talk.title === "Maratona de Programação") {      
      return (
        <ScheduleItem
          iconName={this.props.progCompetition.icon}
          title={this.props.progCompetition.title}
          time={this.props.progCompetition.time}
          local={this.props.progCompetition.local}
          onClick={
            () => createAlert(
              "Inscrição",
              "Deseja abrir o formulário para inscrição?",
              () => Linking.openURL(this.props.progCompetition.urlForm),
              () => false
            )
          }
        />
      );
    }
    return (
      <ScheduleItem
        iconName={talk.icon}
        title={talk.title}
        time={talk.time}
        local={talk.local}
        onClick={() => this.openModal(talk)}
      />
    );
  }

  renderList() {
    return (
      <FlatList
        data={this.props.talks}
        extraData={this.props}
        style={{ marginTop: 14 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        onRefresh={this.props.getTalkWednesday}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderCard() {
    if (this.props.progCompetition) {
      return (
        <Card>
          <ScheduleHeader
            iconName={this.props.progCompetition.icon}
            title="Dia de Palestras e Maratona"
            subtitle="Quarta-feira 07/02"
          />
          <ScheduleContent>
            {this.props.error ? <Text>{this.props.error}</Text> : this.renderList()}
          </ScheduleContent>
        </Card>
      );
    }
    return this.renderActivityIndicator();
  }

  render() {
    return this.renderCard();
  }
}


const mapStateToProps = state => ({
  progCompetition: state.ProgCompetitionReducer.progCompetition,
  loading: state.ProgCompetitionReducer.loading,
  error: state.ProgCompetitionReducer.error,
  talks: state.ProgCompetitionReducer.talks
});
export default connect(mapStateToProps, { getProgCompetition, getTalkWednesday })(Wednesday);