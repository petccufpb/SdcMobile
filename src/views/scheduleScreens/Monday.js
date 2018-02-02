import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, FlatList, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getTalks } from '../../actions/TalkAction';

class Monday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
    }

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    if (this.props.talks.length === 0) {
      this.props.getTalks();
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  dataToTimeline() {
    const res = [];

    for (let i = 0; i < this.props.talks.length; ++i) {
      res.push({
        time: this.props.talks[i].time,
        title: this.props.talks[i].title,
        description: `Local: ${this.props.talks[i].local}`
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