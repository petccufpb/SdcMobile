import React, { Component } from "react";
import { connect } from "react-redux";
import ImageLoad from "react-native-image-placeholder";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import firebase from "firebase";

import { REF_DB_SPEAKERS } from "../actions/refDatabase";
import { ActivityIndicator } from "../components";

/**
 * Props: mainImageURL, speakerKey
 */

export default class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { speaker: {}, error: "" };
    this.getSpeaker(props.speakerKey);
  }

  getSpeaker(speakerID) {
    firebase.database().ref(REF_DB_SPEAKERS + speakerID).once('value', snapshot => {
      this.setState({ ...this.state, speaker: snapshot.val() });
    })
      .catch(error => dispatch(this.setState({ ...this.state, error })));
  }

  render() {
    const { name, specialization, imageURL } = this.state.speaker;
    if (this.state.error) {
      return <Text>{this.state.error}</Text>
    }
    if (!this.state.speaker) {
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.header}>
        <ImageLoad
          resizeMethod="auto"
          resizeMode="contain"
          style={styles.imageCircle}
          borderRadius={20}
          customImagePlaceholderDefaultStyle={styles.imageCircle}
          source={{ uri: imageURL }}
        />
        <View style={styles.txtViewHeader}>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtSpecialization}>{specialization}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txtViewHeader: {
    flex: 1,
    marginTop: 0,
    marginLeft: 10
  },
  txtName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  txtSpecialization: {
    fontSize: 15,
    fontFamily: "Cochin",
    color: "gray"
  },
  header: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
  },
  imageCircle: {
    //position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20
  },
});