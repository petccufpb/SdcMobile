import React from "React";
import {
  View,
  StyleSheet,
  Dimensions
} from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default props => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // main axis
    justifyContent: 'center', // main axis
    // alignItems: 'center', // cross axis
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.45,
    margin: 15,
    padding: 8,
    backgroundColor: 'white'
  }
});