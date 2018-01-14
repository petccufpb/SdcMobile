import React from "react";
import ImageLoad from "react-native-image-placeholder";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

/**
 * Props: mainImageURL, speaker
 */

export default props => {
  const { name, specialization, imageURL } = props.speaker;
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

const styles = StyleSheet.create({
  txtViewHeader: {
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
    flex: 0.2,
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