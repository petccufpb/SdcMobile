import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import { mainColor } from '../../util';

/* Config default para os nav de cada page */
export default navOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: mainColor },
  title: 'SDC18',
  headerTintColor: 'white',
  headerLeft: <Icon.Button name="menu" backgroundColor={mainColor} onPress={() =>
    navigation.navigate('DrawerToggle')}/>
});