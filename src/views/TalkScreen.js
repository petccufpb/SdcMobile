import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";

import { mainColor } from "../util";
import { getAllTalks } from "../actions/TalkAction";
import {
  Card,
  CardHeader,
  CardContent,
  ActivityIndicator
} from "../components";

class TalkScreen extends Component {

  constructor(props) {
    super(props);
    if (this.props.talks.length === 0) {
      this.props.getAllTalks();
    }
  }

  static navigationOptions = {
    title: "Palestras",
    drawerLabel: "Palestras",
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="modern-mic" size={20} color={focused ? mainColor : "gray"} />
    )
  }

  renderItem(talk) {    
    if (talk.title === "Coffee Break" || talk.title === "Check-in" 
      || talk.title === "Abertura - Boas-vindas aos feras"
      || talk.title === "Maratona de Programação") 
      return false;
    return (
      <Card>
        <CardHeader speakerKey={talk.speaker} />
        <CardContent
          imageURL={talk.imageURL}
          title={talk.title}
          date={talk.date}
          time={talk.time}
          local={talk.local}
          description={talk.description}
        />
      </Card>
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderList() {
    if (this.props.talks.length !== 0) {
      return (
        <FlatList 
          data={this.props.talks}
          extraData={this.props}
          style={{ flex: 1 }}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index}
          onRefresh={this.props.getAllTalks}
          refreshing={this.props.loading}
        />
      );
    }
    return this.renderActivityIndicator();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.error ? <Text>{this.props.error}</Text> : this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  talks: state.TalkReducer.allTalks,
  loading: state.TalkReducer.loading,
  error: state.TalkReducer.error
});

export default connect(mapStateToProps, { getAllTalks })(TalkScreen);