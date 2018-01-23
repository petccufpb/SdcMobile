import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const logoSdc = require('../../assets/images/logo-sem-fundo-branca.png');

class SetupLogin extends Component {
  static navigationOptions = { header: null };
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <LinearGradient colors={['#9778da', '#866bd3', '#6441A5']} style={styles.container}>
        <StatusBar
          backgroundColor='#9778da'
          barStyle='light-content'
        />
        <View style={styles.containerImagem}>
          <Image source={logoSdc} style={{ width: 80, height: 95 }} />
        </View>
        <View style={styles.containerSecundario}>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.buttonCadastra}
              onPress={() => navigate('signup')}>
              <Text style={styles.textButtonCadastra}>Cadastra-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={() => navigate('login')}>
              <Text style={styles.textButtonEntrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: '#000',
  },
  containerImagem: {
    flex: 0.5, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerSecundario: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  containerBotoes: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonCadastra: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * .8
  },
  textButtonCadastra: {
    fontFamily: 'Oxygen-Light',
    fontSize: normalizeFontSize(9),
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  buttonEntrar: {
    backgroundColor: '#fff',
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * .8
  },
  textButtonEntrar: {
    fontFamily: 'Oxygen-Light',
    fontSize: normalizeFontSize(9),
    color: '#6441A5',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
});

export default SetupLogin;