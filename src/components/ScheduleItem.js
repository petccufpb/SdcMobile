import React from "React";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { mainColor } from "../util";

/**
 * Props: iconName, title, time, onClick
 */

export default props => {

  return (
    <View style={styles.container}>
      <Entypo
        name={props.iconName}
        size={25}
        style={{ color: mainColor }}
      />
      <View style={styles.info}>
        <Text style={styles.title} allowFontScaling={false}>{props.title}</Text>
        <Text style={styles.author} allowFontScaling={false}>{props.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  info: {
    flexGrow: 1,
    marginHorizontal: 18,
    marginVertical: 10
  },
  title: {
    fontSize: 16,
    color: "black",
  },
  author: {
    fontSize: 15,
    color: 'gray',
  },
});