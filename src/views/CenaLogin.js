import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen'

import {
  changeEmail,
  changePassword,
  loginUser,
  cleanFields
} from '../actions/AuthAction';

/*
  Email teste
    matheus@sdc.com
    matheus123
*/

class CenaLogin extends Component {
  componentWillMount() {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('drawerStack');
      }
      unsubscribe();
      // Quando verificar se o usuario esta logado ou nao, 
      // tira splash
      SplashScreen.hide();
    });
  }

  render() {
    const { container, input } = styles;
    const props = this.props;
    return (
      <View style={container}>
        <Text>
          Mockup Login
          </Text>
        <TextInput
          style={input}
          placeholder="Email"
          onChangeText={email => props.changeEmail(email)}
          value={props.email}
        />
        <TextInput
          style={input}
          placeholder="Password"
          onChangeText={password => props.changePassword(password)}
          value={props.password}
          secureTextEntry
        />
        {/** 
          @todo @alvesmarcos Ao clicar em entrar, desabilitar o botao e 
          colocar algum tipo de feedback de progresso.
          */}
        <Button
          onPress={() => props.loginUser(props.email, props.password)}
          disabled={(props.email && props.password) ? false : true}
          title="Entrar"
          color="steelblue"
          accessibilityLabel="Entrar no aplicativo a partir do e-mail e senha"
        />
        <Button
          onPress={() => { props.cleanFields(); props.navigation.navigate('signup') }}
          title="Criar conta"
          color="steelblue"
          accessibilityLabel="Criar conta no aplicativo a partir do e-mail e senha"
        />
        <Text>
          {props.loginError}
        </Text>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => false}>
          Entrar com Facebook
          </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "powderblue"
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width * .8
  }
});

const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
  loginError: state.AuthReducer.loginError
})

export default connect(mapStateToProps, {
  changeEmail,
  changePassword,
  loginUser,
  cleanFields
})(CenaLogin);