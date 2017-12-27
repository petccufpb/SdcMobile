import React from 'react';
import { View } from 'react-native';

export default props => (
  <View
    style={{
      borderBottomColor: props.color || 'gray',
      borderBottomWidth: props.width || 0.5,
      opacity: props.opacity || 0.62,
      marginHorizontal: 10
    }}
  />
);