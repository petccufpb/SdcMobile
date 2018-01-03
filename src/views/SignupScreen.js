import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import { 
  changeName,
  changeEmail, 
  changePassword,
  createUser,
  loginUser 
} from '../actions/AuthAction'
import { User } from '../models/';

const signupScreen = props => {
  const { container, input } = styles;
  return (
    <View style={container}>
      <Text>
        Mockup Signup
      </Text>
      <TextInput
        style={input}
        placeholder="Nome"
        onChangeText={name => props.changeName(name)}
        value={props.name}
      />
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
        onPress={() => props.createUser(new User(props.name, props.email), props.password)}
        disabled={(props.name && props.email && props.password) ? false : true}
        title="Criar conta"
        color="steelblue"
        accessibilityLabel="Criar conta no aplicativo a partir do e-mail e senha"
      />
      <Text>
        {props.loginError}
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
})(signupScreen);