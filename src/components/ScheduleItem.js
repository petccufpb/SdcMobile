import React from "React";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { mainColor } from "../util";

/**
 * Props: iconName, title, date
 */

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemView}>
        <View style={styles.itemView}>
          <Entypo
            name={props.iconName}
            size={20}
            style={{ color: mainColor }}
          />
          <Text style={styles.txtTitle}>{props.title}</Text>
        </View>
        <Text style={styles.txtTitle}>{props.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 2,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    padding: 3,
    marginLeft: 8,
    //flex: 1
  }
});