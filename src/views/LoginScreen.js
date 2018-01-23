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
import { 
  changeEmail,
  changePassword,
  loginUser,
  loginWithFacebook,
  loginWithGoogle }
from '../actions/AuthAction'
import { normalizeFontSize } from '../util';

const logoSdc = require('../../assets/images/logo-sem-fundo.png');

class LoginScreen extends Component {
  static navigationOptions = { header: null };

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
              onPress={() => this.props.loginUser(this.props.email, this.props.password)}>
              <Text style={styles.textButtonEntrar}>Entrar</Text>
            </TouchableOpacity>
            <Hr color='#fff' width={1}>
              <Text style={styles.textWithDivider}>OU</Text>
            </Hr>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.buttonFacebookGoogle, { backgroundColor: '#3b5998', marginRight: 5 }]}
                onPress={() => this.props.loginWithFacebook() }>
                <View style={styles.containerButtonFacebookGoogle}>
                  <Icon name='facebook' color='#fff' size={20} />
                  <Text style={styles.textButtonFacebookGoogle}>Facebook</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonFacebookGoogle, { backgroundColor: '#d34836', marginLeft: 5 }]}
                onPress={() => this.props.loginUser(this.props.email, this.props.password)}>
                <View style={styles.containerButtonFacebookGoogle}>
                  <Icon name='google' color='#fff' size={20} />
                  <Text style={styles.textButtonFacebookGoogle}>Google</Text>
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
    fontFamily: 'Oxygen-Light',
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
    fontFamily: 'Oxygen-Light',
    fontSize: normalizeFontSize(9),
    color: '#6441A5',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  textWithDivider: {
    color: 'white',
    fontFamily: 'Oxygen-Light',
    marginVertical: 10,
    paddingHorizontal: 10
  },
  buttonFacebookGoogle: {
    borderRadius: 50, 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 0.5, 
  },
  containerButtonFacebookGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  textButtonFacebookGoogle: {
    marginLeft: 12, 
    fontFamily: 'Oxygen-Light',
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
  { changeEmail, changePassword, loginUser, loginWithFacebook, loginWithGoogle })(LoginScreen);