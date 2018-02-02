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
      let tipo = 'Palestra\t\t';
      if (this.props.talks[i].title === 'Check-in' || 
          this.props.talks[i].title === 'Abertura - Boas-vindas aos feras' ||
          this.props.talks[i].title === 'Coffee Break') {
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
  talks: state.TalkReducer.talks,
  error: state.TalkReducer.error,
  loading: state.TalkReducer.loading
});

export default connect(mapStateToProps, { getTalks })(Monday);