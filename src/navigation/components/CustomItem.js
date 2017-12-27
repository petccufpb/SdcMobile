import React from 'react';
import { View, Text, Platform, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress()} delayPressIn={0}>
        <SafeAreaView
          forceInset={{
            drawerPosition: 'always',
            vertical: 'never',
          }}
        >
          <View style={styles.item}>
            <View style={styles.icon}>
              <Icon name={props.iconName} size={20} color='gray' />
            </View>
            <Text style={styles.label}>
              {props.title}
            </Text>
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
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
    fontWeight: 'bold',
    color: 'gray'
  },
});
