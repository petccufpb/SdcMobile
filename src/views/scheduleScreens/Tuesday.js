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

  dataToTimeline() {
    const res = [];

    for (let i = 0; i < this.props.labs.length; ++i) {
      let tipo = 'Palestra\t\t';
      
      if (this.props.labs[i].title === 'Workshop de Graduação do CI') {
        tipo = 'Apresentação\t\t';
      }
      if (this.props.labs[i].title === 'Coffee Break') {
        tipo = '';
      }
      res.push({
        time: this.props.labs[i].time,
        title: this.props.labs[i].title,
        description: `${tipo}Local: ${this.props.labs[i].local}\n\nGratuito`
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
  labs: state.LabReducer.labs,
  error: state.LabReducer.error,
  loading: state.LabReducer.loading
});

export default connect(mapStateToProps, { getLabs })(Tuesday);