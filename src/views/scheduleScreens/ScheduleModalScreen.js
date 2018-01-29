import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';

import { ScrollViewCard, CardContent, CardHeader } from "../../components";
import { mainColor } from "../../util";

export default class ScheduleModalScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title,
    headerLeft: <Icon.Button name="chevron-left" backgroundColor={mainColor} onPress={() =>
      navigation.goBack()}/>    
  });

  render() {
    const { state } = this.props.navigation;
    var sheduleItem = state.params;
    return (
      <ScrollViewCard>
        <CardHeader speakerKey={sheduleItem.speaker} />
        <CardContent
          imageURL={sheduleItem.imageURL}
          title={sheduleItem.title}
          date={sheduleItem.date}
          time={sheduleItem.time}
          local={sheduleItem.local}
          description={sheduleItem.description}
        />
      </ScrollViewCard>
    );
  }
}