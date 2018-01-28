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
    var talk = state.params;
    return (
      <ScrollViewCard>
        <CardHeader speakerKey={talk.speaker} />
        <CardContent
          imageURL={talk.imageURL}
          title={talk.title}
          date={talk.date}
          time={talk.time}
          local={talk.local}
          description={talk.description}
        />
      </ScrollViewCard>
    );
  }
}