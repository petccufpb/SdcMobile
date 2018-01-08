import React from "React";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  }
});