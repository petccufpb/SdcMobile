import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import { changeEmail, changePassword, loginUser } from '../actions/AuthAction'

/*
  Email teste
    matheus@sdc.com
    matheus123
*/

const cenaLogin = props => {
  const { container, input } = styles;
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
      <Button
        onPress={() => props.loginUser(props.email, props.password)}
        disabled={(props.email && props.password) ? false : true}
        title="Entrar"
        color="steelblue"
        accessibilityLabel="Entrar no aplicativo a partir do e-mail e senha"
      />
      <Text>
        {props.loginError}
      </Text>
      <Text
          style={styles.linky}
          onPress={() => props.navigation.navigate('drawerNav')} >
          Pretend we logged in
      </Text>
    </View>
  );
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

mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password,
  loginError: state.AuthReducer.loginError
})

export default connect(mapStateToProps, { changeEmail, changePassword, loginUser })(cenaLogin);