import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, Platform, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getGameDay, getGameDayGames } from "../../actions/GameDayAction";

class Friday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
    }

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    if (!this.props.gameday) {
      this.props.getGameDay();
    }

    if (this.props.games.length === 0) {
      this.props.getGameDayGames();
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  dataToTimeline() {
    const res = [];

    for (let i = 0; i < this.props.games.length && this.props.gameday; ++i) {
      res.push({
        time: this.props.gameday.time,
        title: this.props.games[i].name,
        description: `Competição \t Local: ${this.props.gameday.local}`
      });
    }

    return res;
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
            data={this.dataToTimeline()}
            columnFormat='single-column-left'
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
  gameday: state.GameDayReducer.gameday,
  games: state.GameDayReducer.games,
  loading: state.GameDayReducer.loading,
  error: state.GameDayReducer.error,
});
export default connect(mapStateToProps, { getGameDay, getGameDayGames })(Friday);