import React from 'react';
import { View } from 'react-native';

export default props => (
  <View
    style={{
      borderBottomColor: props.color || 'gray',
      borderBottomWidth: props.width || 0.5,
    }}
  />
);