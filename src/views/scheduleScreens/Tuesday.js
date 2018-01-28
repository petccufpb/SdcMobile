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

import { getLabs } from "../../actions/LabAction";

class Tuesday extends Component {
  constructor(props) {
    super(props);
    if (this.props.labs.length === 0) {
      this.props.getLabs();
    }
  }

  renderItem(lab) {
    return (
      <ScheduleItem
        iconName={lab.icon}
        title={lab.title}
        time={lab.time}
        local={lab.local}
      />
    );
  }

  renderList() {
    return (
      <FlatList
        data={this.props.labs}
        extraData={this.props}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        onRefresh={this.props.getLabs}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderCard() {
    if (this.props.labs.length !== 0) {
      return (
        <Card>
          <ScheduleHeader
            iconName="slideshare"
            title="Dia dos Feras"
            subtitle="Terça-feira 06/02"
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
  labs: state.LabReducer.labs,
  error: state.LabReducer.error,
  loading: state.LabReducer.loading
});

export default connect(mapStateToProps, { getLabs })(Tuesday);