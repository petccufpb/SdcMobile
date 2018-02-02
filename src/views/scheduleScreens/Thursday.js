import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Text, Platform, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { getCourses } from '../../actions/CourseAction';

class Thursday extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
    }

    console.ignoredYellowBox = [
      'Setting a timer'
    ];

    if (this.props.courses.length === 0) {
      this.props.getCourses();
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderTimeline: true }) }, 0);
  }

  dataToTimeline() {
    const res = [];

    for (let i = 0; i < this.props.courses.length; ++i) {
      res.push({
        time: this.props.courses[i].time,
        title: this.props.courses[i].title,
        description: `Minicurso \t Local: ${this.props.courses[i].local}`
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
  courses: state.CourseReducer.courses,
  error: state.CourseReducer.error,
  loading: state.CourseReducer.loading
});
export default connect(mapStateToProps, { getCourses })(Thursday);