import React, { Component } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

import { mainColor } from "../util";
import { getTalks } from "../actions/TalkAction";
import {
  Card,
  CardHeader,
  CardContent
} from "../components";

class TalkScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getTalks();
  }

  static navigationOptions = {
    title: "Palestras",
    drawerLabel: "Palestras",
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="modern-mic" size={20} color={focused ? mainColor : "gray"} />
    )
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.talks.filter(talk => {
            if (talk.title === "Coffee Break")
              return false;
            return true;
          }).map((talk, index) =>
            <Card key={index}>
              <CardHeader speaker={talk.speaker} />
              <CardContent
                imageURL={talk.imageURL}
                title={talk.title}
                date={talk.date}
                time={talk.time}
                local={talk.local}
                description={talk.description}
              />
            </Card>
            )
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  talks: state.TalkReducer.talks
});

export default connect(mapStateToProps, { getTalks })(TalkScreen);