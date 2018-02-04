import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Hr from 'react-native-hr-plus';
import Icon from 'react-native-vector-icons/Zocial';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import {
  changeEmail,
  changePassword,
  loginUser,
  loginWithFacebook,
  clearLoginError
} from '../actions/AuthAction';
import { normalizeFontSize } from '../util';

const logoSdc = require('../../assets/images/logo-sem-fundo.png');

class LoginScreen extends Component {
  static navigationOptions = { header: null };

  async loginUser() {
    if (!this.props.email || !this.props.password) {
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
    await this.props.loginUser(this.props.email, this.props.password);

    if(this.props.loginError) {
      this.props.clearLoginError();
     
      return Snackbar.show({
        title: 'Email ou senha incorreto(s)',
        backgroundColor: 'red',
        action: {
          title: 'Ok',
          color: 'white',
          onPress: () => false,
        },
      });
    }
  }

  render() {
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
              onPress={() => this.loginUser()}>
              <Text style={styles.textButtonEntrar}>Entrar</Text>
            </TouchableOpacity>
            <Hr color='#fff' width={1}>
              <Text style={styles.textWithDivider}>OU</Text>
            </Hr>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.buttonEntrar, { backgroundColor: '#3b5998' }]}
                onPress={() => this.props.loginWithFacebook()}>
                <View style={styles.containerButtonFacebookGoogle}>
                  <Icon name='facebook' color='#fff' size={20} />
                  <Text style={styles.textButtonFacebookGoogle}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    flex: 0.4, flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCampos: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  containerSecundario: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  containerBotoes: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    fontFamily: 'Roboto-Light',
    fontSize: normalizeFontSize(8),
    color: '#757575',
    marginTop: 5,
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
  textWithDivider: {
    color: 'white',
    fontFamily: 'Roboto-Light',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  containerButtonFacebookGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  textButtonFacebookGoogle: {
    marginLeft: 12,
    fontFamily: 'Roboto-Light',
    fontSize: normalizeFontSize(9),
    color: '#fff'
  }
});

mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
  loginError: state.AuthReducer.loginError
})

export default connect(mapStateToProps,
  { changeEmail, changePassword, loginUser, loginWithFacebook, clearLoginError })(LoginScreen);