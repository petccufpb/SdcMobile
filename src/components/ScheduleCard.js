import React from "React";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions
} from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default props => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {props.children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {

  },
  container: {
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.45,
    margin: 10,
    padding: 8,
    backgroundColor: 'white'
  }
});