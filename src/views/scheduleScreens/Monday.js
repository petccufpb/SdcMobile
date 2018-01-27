import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, FlatList } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem,
  ActivityIndicator
} from "../../components/";

import { getTalks } from "../../actions/TalkAction";

class Monday extends Component {
  constructor(props) {
    super(props);
    if (this.props.talks.length === 0) {
      this.props.getTalks();
    }
  }

  renderItem(talk) {
    return (
      <ScheduleItem
        iconName={talk.icon}
        title={talk.title}
        time={talk.time}
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
        onRefresh={this.props.getTalks}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderCard() {
    if (this.props.talks.length !== 0) {
      return (
        <Card>
          <ScheduleHeader
            iconName="modern-mic"
            title="Dia de Palestras"
            subtitle="Segunda-feira 05/02"
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
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
  loading: state.TalkReducer.loading
});

export default connect(mapStateToProps, { getTalks })(Monday);