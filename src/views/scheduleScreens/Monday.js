import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, FlatList, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getTalks } from "../../actions/TalkAction";

class Monday extends Component {
  constructor(props) {
    super(props);

    if (this.props.talks.length === 0) {
      this.props.getTalks();
    }

    this.state = {
      renderTimeline: false,
    }

    this.data = [
      { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ' },
      { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
      { time: '12:00', title: 'Lunch' },
      { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ' },
      { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)' }
    ]
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  render() {
    const { renderTimeline } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#000'
          barStyle='light-content'
        />
        {!renderTimeline &&
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        }
        {renderTimeline &&
          <Timeline
            style={styles.list}
            data={this.data}
            circleSize={20}
            circleColor='#BDBDBD'
            lineColor='#BDBDBD'
            timeContainerStyle={{ minWidth: 52 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#D500F9', color: 'white', padding: 5, borderRadius: 13 }}
            descriptionStyle={{ color: 'white', fontFamily: 'Roboto-Light' }}
            titleStyle={{ color: 'white', fontFamily: 'Roboto-Light' }}
            separatorStyle={{ height: 0.5 }}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#303030'
  },
  list: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
  loading: state.TalkReducer.loading
});

export default connect(mapStateToProps, { getTalks })(Monday);