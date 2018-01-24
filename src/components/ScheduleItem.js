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
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <View style={styles.itemView}>
          <View style={styles.itemView}>
            <Entypo
              name={props.iconName}
              size={20}
              style={{ color: mainColor, alignSelf: 'center' }}
            />
            <Text style={styles.txtTitle}>{props.title}</Text>
          </View>
          <Text style={styles.txtTime}>{props.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginBottom: 2,
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    flex: 1,
    padding: 3,
    marginLeft: 8,
  },
  txtTime: {
    padding: 3,
    marginLeft: 8,
    alignSelf: 'center'
  }
});