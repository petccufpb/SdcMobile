import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

import { mainColor } from '../../util';

export default props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.cover}
        resizeMode='contain'
        source={require('../../img/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: mainColor
  },
  cover: {
    alignSelf: 'center',
    width: 80,
    height: 80
  },
});