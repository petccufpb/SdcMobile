import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, FlatList } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem,
  ActivityIndicator
} from "../../components/";

import { getCourses } from "../../actions/CourseAction";

class Thursday extends Component {
  constructor(props) {
    super(props);
    if (this.props.courses.length === 0) {
      this.props.getCourses();
    }
  }

  renderItem(course) {
    return (
      <ScheduleItem
        iconName={course.icon}
        title={course.title}
        time={course.time}
        local={course.local}
        onClick={() => this.props.navigation.navigate("scheduleModal", course)}
      />
    );
  }

  renderList() {
    return (
      <FlatList
        data={this.props.courses}
        extraData={this.props}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        onRefresh={this.props.getCourses}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderCard() {
    if (this.props.courses.length !== 0) {
      return (
        <Card>
          <ScheduleHeader
            iconName="code"
            title="Dia de Minicursos"
            subtitle="Quinta-feira 08/02"
          />
          <ScheduleContent>
            {this.props.error ? <Text>{this.props.error}</Text> : this.renderList()}
          </ScheduleContent>
        </Card>
      );
    }
    return this.renderActivityIndicator();
  }

  render() {
    return this.renderCard();
  }
}


const mapStateToProps = state => ({
  courses: state.CourseReducer.courses,
  error: state.CourseReducer.error,
  loading: state.CourseReducer.loading
});

export default connect(mapStateToProps, { getCourses })(Thursday);