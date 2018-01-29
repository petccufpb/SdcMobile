import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { mainColor } from '../../util';

const logoSdc = require('../../../assets/images/logo-sem-fundo-branca.png');

export default props => {
  const { container, txt } = styles;
  return (
    <View style={container}>
      <View style={styles.containerImagem}>
        <Image source={logoSdc} style={{ width: 65, height: 75 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 120
  },
  txt: {
    color: 'white',
    fontFamily: 'Rancho-Regular',
    fontSize: 30
  }
});