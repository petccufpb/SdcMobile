import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Text, FlatList, View } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem
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
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        onRefresh={this.props.getTalks}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
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
    console.log(this.props.loading)
    return this.renderCard();
  }
}


const mapStateToProps = state => ({
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
  loading: state.TalkReducer.loading
});

export default connect(mapStateToProps, { getTalks })(Monday);