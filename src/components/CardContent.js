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
  content: {
    margin: 5
  },
  title: {
    color: mainColor,
    fontSize: 28,    
  },
  date: {
    color: "gray"
  },
  local: {
    marginBottom: 8,
    color: "gray"
  },
  description: {
    fontSize: 17,
    textAlign: "justify",
    marginBottom: 8
  },
  imageView: {
    flex: 0.8,
    padding: 10,
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
    height: 250
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});