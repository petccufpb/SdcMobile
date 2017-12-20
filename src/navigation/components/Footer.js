import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { mainColor, lightGray } from '../../util';
import { Hr } from '../../components/';

export default props => {
  const { container, txt } = styles;
  return (
    <View style={container}>
      <Hr color={lightGray}/>
      <Text style={txt}> Footer </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  txt: {
    marginTop: 10,
    color: mainColor
  }
});