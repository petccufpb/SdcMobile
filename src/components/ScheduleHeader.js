import React from "React";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { mainColor } from "../util";

export default props => {
  return (
    <View style={styles.container}>
      <Entypo
        name={props.iconName}
        size={80}
        style={{ color: mainColor }}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
  }
});