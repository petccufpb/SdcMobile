import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import LogoutItem from './LogoutItem';
import { Hr } from '../../components/';

export default props => {
  const { container, txt } = styles;
  return (
    <View style={container}>
      <LogoutItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});