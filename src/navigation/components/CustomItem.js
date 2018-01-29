import React from 'react';
import { View, Text, Platform, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} delayPressIn={0}>
      <View style={styles.item}>
        <View style={styles.icon}>
          <Icon name={props.iconName} size={40} color='gray' />
        </View>
        <Text style={styles.label}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 40,
    alignItems: 'center',
    opacity: 0.62,
    paddingLeft: 2
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62,
  },
  label: {
    margin: 16,
    color: 'gray',
    fontFamily: 'Roboto-Light',
    fontSize: 20,
    fontWeight: 'normal',
  },
});