import React, { Component } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem,
  ActivityIndicator
} from "../../components/";

import { getProgCompetition } from "../../actions/ProgCompetitionAction";

class Wednesday extends Component {
  constructor(props) {
    super(props);
    if (!this.props.progCompetition) {
      this.props.getProgCompetition();
    }
  }

  renderItem() {
    return (
      <ScheduleItem
        iconName={this.props.progCompetition.icon}
        title={this.props.progCompetition.title}
        time={this.props.progCompetition.time}
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
            title="Dia de Maratona"
            subtitle="Quarta-feira 07/02"
          />
          <ScheduleContent>
            {this.props.error ? <Text>{this.props.error}</Text> : this.renderItem()}
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
});
export default connect(mapStateToProps, { getProgCompetition })(Wednesday);