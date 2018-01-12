import React, { Component } from "react";
import { connect } from "react-redux";
import { ActivityIndicator, Text } from "react-native";

import ScheduleCard from "../../components/ScheduleCard";
import ScheduleHeader from "../../components/ScheduleHeader";
import ScheduleContent from "../../components/ScheduleContent";
import ScheduleItem from "../../components/ScheduleItem";

import { getTalks } from "../../actions/TalkAction";

class Monday extends Component {
  constructor(props) {
    super(props);
    this.props.getTalks();
  }

  render() {
    return (
      <ScheduleCard>
        <ScheduleHeader
          iconName="modern-mic"
          title="Dia de Palestras"
          subtitle="Segunda-feira 05/02"
        />
        <ScheduleContent>
          <Text>{this.props.error}</Text>
          {
            !(this.props.error || this.props.talks.length !== 0) ? <ActivityIndicator /> :
            this.props.talks.map((talk, index) =>
              <ScheduleItem key={index} iconName={talk.icon} title={talk.title} time={talk.time} />)
          }
        </ScheduleContent>
      </ScheduleCard>
    );
  }
}


const mapStateToProps = state => ({
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
});

export default connect(mapStateToProps, { getTalks })(Monday);