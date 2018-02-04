import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  changeName,
  changeEmail,
  changePassword,
  createUser,
  loginUser,
  clearLoginError
} from '../actions/AuthAction';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import { User } from '../models';
import { normalizeFontSize } from '../util';

const logoSdc = require('../../assets/images/logo-sem-fundo.png');

class SignupScreen extends Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  static navigationOptions = { header: null };

  async createUser() {
    if (!this.props.name || !this.props.email || !this.props.password) {
      return Snackbar.show({
        title: 'Preencha todos os campos',
        backgroundColor: 'red',
        action: {
          title: 'Ok',
          color: 'white',
          onPress: () => false,
        },
      });
    }
    await this.props.createUser(new User(this.props.name, this.props.email), this.props.password);

    if(this.props.loginError) {
      this.props.clearLoginError();
      return Snackbar.show({
        title: 'Por favor preencha corretamente',
        backgroundColor: 'red',
        action: {
          title: 'Ok',
          color: 'white',
          onPress: () => false,
        },
      });
    } else {
      return Snackbar.show({
        title: 'Cadastro efetuado com sucesso',
        backgroundColor: 'green',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          title: 'Entrar',
          color: 'white',
          onPress: () => this.props.navigation.navigate('drawerStack')
        },
      });
    }
  }

  render() {
    const { container, input } = styles;
    return (
      <LinearGradient colors={['#fff', '#eef2f8', '#ccc8ca']} style={styles.container}>
        <StatusBar
          backgroundColor='#fff'
          barStyle='dark-content'
        />
        <View style={styles.containerImagem}>
          <Image source={logoSdc} style={{ width: 80, height: 95 }} />
        </View>
        <View style={styles.containerSecundario}>
          <View style={styles.containerCampos}>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor='#9E9E9E'
              underlineColorAndroid='#E0E0E0'
              selectionColor='#9E9E9E'
              onChangeText={name => this.props.changeName(name)}
              value={this.props.name}
            />
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor='#9E9E9E'
              underlineColorAndroid='#E0E0E0'
              selectionColor='#9E9E9E'
              onChangeText={email => this.props.changeEmail(email)}
              value={this.props.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor='#9E9E9E'
              underlineColorAndroid='#E0E0E0'
              selectionColor='#9E9E9E'
              onChangeText={password => this.props.changePassword(password)}
              value={this.props.password}
              secureTextEntry
            />
          </View>
          <View style={styles.containerBotoes}>
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={() => this.createUser()}
            >
              <Text style={styles.textButtonEntrar}>Cadastrar</Text>
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
  textTitulo: {
    fontFamily: 'Rancho-Regular',
    fontSize: normalizeFontSize(18),
    color: '#9778da',
  },
  containerTitulo: {
    flex: 0.2, flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCampos: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerSecundario: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  containerBotoes: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  input: {
    fontFamily: 'Roboto-Light',
    fontSize: normalizeFontSize(8),
    color: '#757575',
    marginTop: 7,
    width: Dimensions.get("window").width * .8
  },
  buttonEntrar: {
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * .8
  },
  textButtonEntrar: {
    fontFamily: 'Roboto-Light',
    fontSize: normalizeFontSize(9),
    color: '#6441A5',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  containerImagem: {
    flex: 0.2, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});

const mapStateToProps = state => ({
  name: state.AuthReducer.name,
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
  loginError: state.AuthReducer.loginError
})

export default connect(mapStateToProps, {
  changeName,
  changeEmail,
  changePassword,
  createUser,
  clearLoginError
})(SignupScreen);