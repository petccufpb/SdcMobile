import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, View, StatusBar, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-listview';

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

    this.data = [
      { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ' },
      { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
      { time: '12:00', title: 'Lunch' },
      { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ' },
      { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)'  }
    ]
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

  renderTimeLine() {
    return (
      <Timeline
        style={styles.list}
        data={this.data}
        circleSize={20}
        circleColor='#68efad'
        lineColor='#68efad'
        timeContainerStyle={{ minWidth: 52 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#691a99', color: 'white', padding: 5, borderRadius: 13 }}
        descriptionStyle={{ color: 'gray', fontFamily: 'Roboto-Light' }}
        titleStyle={{ color: 'gray', fontFamily: 'Roboto-Light' }}
        separatorStyle={{ height: 0.5 }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        {this.renderTimeLine()}
      </View>
    );
  }
}


const mapStateToProps = state => ({
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
  loading: state.TalkReducer.loading
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
  },
});

export default connect(mapStateToProps, { getTalks })(Monday);