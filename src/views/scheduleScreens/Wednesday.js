import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, Platform, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getTalkWednesday } from "../../actions/ProgCompetitionAction";

class Wednesday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
    }

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    if (this.props.talks.length === 0) {
      this.props.getTalkWednesday();
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  dataToTimeline() {
    const res = [];

    for (let i = 0; i < this.props.talks.length; ++i) {
      let tipo = 'Palestra\t\t';
      
      if (this.props.talks[i].title === 'Maratona de Programação') {
        tipo = 'Competição\t\t';
      }
      if (this.props.talks[i].title === 'Coffee Break') {
        tipo = '';
      }
      res.push({
        time: this.props.talks[i].time,
        title: this.props.talks[i].title,
        description: `${tipo}Local: ${this.props.talks[i].local}`
      });
    }

    return res;
  }

  render() {
    const { renderTimeline } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
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
            circleColor='#68efad'
            lineColor='#68efad'
            timeContainerStyle={{ minWidth: 52 }}
            timeStyle={{ textAlign: 'center', backgroundColor: '#691a99', color: 'white', padding: 5, borderRadius: 13 }}
            descriptionStyle={{ color: 'gray', fontFamily: 'Roboto-Light' }}
            titleStyle={{ color: 'gray', fontFamily: 'Roboto-Light' }}
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
    backgroundColor: '#fafafa'
  },
  list: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  progCompetition: state.ProgCompetitionReducer.progCompetition,
  loading: state.ProgCompetitionReducer.loading,
  error: state.ProgCompetitionReducer.error,
  talks: state.ProgCompetitionReducer.talks
});
export default connect(mapStateToProps, { getTalkWednesday })(Wednesday);