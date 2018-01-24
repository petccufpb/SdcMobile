import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  changeName,
  changeEmail,
  changePassword,
  createUser,
  loginUser
} from '../actions/AuthAction'
import LinearGradient from 'react-native-linear-gradient';
import { User } from '../models';
import { normalizeFontSize } from '../util';

class SignupScreen extends Component {
  static navigationOptions = { header: null };

  render() {
    const { container, input } = styles;
    return (
      <LinearGradient colors={['#fff', '#eef2f8']} style={styles.container}>
        <StatusBar
          backgroundColor='#fff'
          barStyle='dark-content'
        />
        <View style={styles.containerTitulo}>
          <Text style={styles.textTitulo}>Semana da</Text>
          <Text style={styles.textTitulo}>Computação</Text>
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
              onPress={() => this.props.loginUser(this.props.email, this.props.password)}>
              <Text style={styles.textButtonEntrar}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          {/* <Button
            onPress={() => this.props.createUser(new User(this.props.name, this.props.email), this.props.password)}
            disabled={(this.props.name && this.props.email && this.props.password) ? false : true}
            title="Criar conta"
            color="steelblue"
            accessibilityLabel="Criar conta no aplicativo a partir do e-mail e senha"
          />
          <Text>
            {this.props.loginError}
          </Text> */}
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
    justifyContent: 'space-around'
  },
  containerSecundario: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  containerBotoes: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  input: {
    fontFamily: 'Oxygen-Light',
    fontSize: normalizeFontSize(8),
    color: '#757575',
    marginTop: 5,
    width: Dimensions.get("window").width * .8
  },
  buttonEntrar: {
    backgroundColor: '#9778da',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * .8
  },
  textButtonEntrar: {
    fontFamily: 'Oxygen-Light',
    fontSize: normalizeFontSize(9),
    color: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10
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
  createUser
})(SignupScreen);