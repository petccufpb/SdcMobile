import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

export default props => {
  return (
    <View style={styles.container}>
      <Text>Sexta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});