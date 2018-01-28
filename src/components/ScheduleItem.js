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

import { mainColor, lightMainColor, secondColor } from "../util";

/**
 * Props: iconName, title, time, local, onClick
 */

export default props => {

  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.container}>
        <Entypo
          name={props.iconName}
          size={30}
          style={{ color: mainColor }}
        />
        <View style={styles.info}>
          <Text style={styles.title} allowFontScaling={false}>{props.title}</Text>
          <View style={styles.subinfo}>
            <Entypo
              name="clock"
              size={15}
              style={{ color: lightMainColor }}
            />
            <Text style={styles.author} allowFontScaling={false}> {props.time} </Text>
            <Entypo
              name="location"
              size={15}
              style={{ color: lightMainColor, marginLeft: 15 }}
            />
            <Text style={styles.author} allowFontScaling={false}> {props.local}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5 
  },
  subinfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  info: {
    flexGrow: 1,
    flexDirection: 'column',
    marginHorizontal: 18,
    marginVertical: 10,    
  },
  title: {
    fontSize: 17,
    color: "black",
  },
  author: {
    fontSize: 15,
    color: lightMainColor,
    marginLeft: 2
  },
});