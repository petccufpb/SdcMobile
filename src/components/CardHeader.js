import React, { Component } from "react";
import { connect } from "react-redux";
import ImageLoad from "react-native-image-placeholder";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { ActivityIndicator } from "../components";
import { getSpeaker } from "../actions/SpeakerAction";

/**
 * Props: mainImageURL, speakerKey
 */

class CardHeader extends Component {
  constructor(props) {
    super(props);
    if (!this.props.speaker) {
      this.props.getSpeaker(props.speakerKey)
    }
  }
  render() {
    const { name, specialization, imageURL } = this.props.speaker;
    if (this.props.error) {
      return <Text>{this.props.error}</Text>
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
          {
            this.props.loading ? <ActivityIndicator /> : 
            <View>
              <Text style={styles.txtName}>{name}</Text>
              <Text style={styles.txtSpecialization}>{specialization}</Text>
            </View>
          }
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

const mapStateToProps = state => ({
  speaker: state.SpeakerReducer.speaker,
  loading: state.SpeakerReducer.loading,
  error: state.SpeakerReducer.error
});

export default connect(mapStateToProps, { getSpeaker })(CardHeader);