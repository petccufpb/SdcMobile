import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import ImageLoad from "react-native-image-placeholder";

import { mainColor, buildStringDate } from "../util";

/**
 * Props: imageURL, title, date, time, description
 */

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <ImageLoad
          resizeMode="contain"
          resizeMethod="auto"
          source={{ uri: props.imageURL }}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{buildStringDate(props.date, props.time)}</Text>
        <Text style={styles.local}>Local: {props.local}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
    height: 200
  },
  content: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    margin: 10
  },
  title: {
    color: mainColor,
    fontSize: 25,
    marginHorizontal: 8,
  },
  date: {
    color: "gray",
    marginHorizontal: 8,
  },
  local: {
    marginBottom: 8,
    color: "gray",
    marginHorizontal: 8,
  },
  description: {
    fontSize: 17,
    textAlign: "justify",
    marginHorizontal: 8,
    marginVertical: 10, 
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});