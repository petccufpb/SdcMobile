import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { mainColor } from '../../util';

export default props => {
  const { container, txt } = styles;
  return (
    <View style={container}>
      <Text style={txt}> Custom Header </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: mainColor
  },
  txt: {
    color: 'white'
  }
});