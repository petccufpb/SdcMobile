import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, Platform, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getLabs } from '../../actions/LabAction';

class Tuesday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
      labs: props.labs
    }

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    if (this.props.labs.length === 0) {
      this.props.getLabs();
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  labsToTimeline() {
    const res = [];
  
    for (let i = 0; i < this.props.labs.length; ++i) {
      res.push({ 
        time: this.props.labs[i].time, 
        title: this.props.labs[i].title, 
        description: `Local: ${this.props.labs[i].local}` 
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
            data={this.labsToTimeline()}
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
  labs: state.LabReducer.labs,
  error: state.LabReducer.error,
  loading: state.LabReducer.loading
});

export default connect(mapStateToProps, { getLabs })(Tuesday);