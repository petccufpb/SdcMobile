import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor } from '../../util';

/* Config default para os nav de cada page */
export default navOptions = ({ navigation }) => ({
  headerTitleStyle: {
    fontFamily: 'Roboto-Light',
    fontWeight: 'normal',
  },
  title: 'SDC18',
  headerStyle: { backgroundColor: '#212121', elevation: 0 },
  headerTintColor: 'white',
  headerLeft: <Icon.Button name="ios-menu-outline" color={'gray'} backgroundColor={'#fff'} onPress={() =>
    navigation.navigate('DrawerToggle')} />,
});