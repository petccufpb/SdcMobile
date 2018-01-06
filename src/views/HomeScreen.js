import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { mainColor } from "../util";

class Monday extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Segunda</Text>
      </View>
    );
  }
}

class Tuesday extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Terça</Text>
      </View>
    );
  }
}

class Wednesday extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Quarta</Text>
      </View>
    );
  }
}

class Thursday extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Quinta</Text>
      </View>
    );
  }
}

class Friday extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Sexta</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TabHome = TabNavigator({
  Monday: {
    screen: Monday,
    navigationOptions: {
      tabBarLabel: 'Segunda',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo //Componente do icone da barra de navegação inferior
          name="modern-mic"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Tuesday: {
    screen: Tuesday,
    navigationOptions: {
      tabBarLabel: 'Terça',
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons //Componente do icone da barra de navegação inferior
          name="presentation"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Wednesday: {
    screen: Wednesday,
    navigationOptions: {
      tabBarLabel: 'Quarta',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo //Componente do icone da barra de navegação inferior
          name="medal"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Thursday: {
    screen: Thursday,
    navigationOptions: {
      tabBarLabel: 'Quinta',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo //Componente do icone da barra de navegação inferior
          name="code"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Friday: {
    screen: Friday,
    navigationOptions: {
      tabBarLabel: 'Sexta',
      tabBarIcon: ({ tintColor, focused }) => (
        <Entypo //Componente do icone da barra de navegação inferior
          name="game-controller"
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: mainColor,
    },
  }
);