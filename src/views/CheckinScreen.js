import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from "react-redux";

import { mainColor } from '../util';
import { checkinUser, cleanFields, toggleQRCodeScanner, getUserCheckin } from "../actions/CheckinAction";
import { ActivityIndicator } from "../components";

class CheckinScreen extends Component {
  constructor(props) {
    super(props);
    this.props.getUserCheckin();
  }

  static navigationOptions = {
    title: 'Check-in',
    drawerLabel: 'Check-in',
    headerStyle: { backgroundColor: '#f5f5f5', elevation: 5 },
    drawerIcon: ({ focused, tintColor }) => (
      <Ionicons name='ios-qr-scanner-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  onSuccess(e) {
    const checkinDay = e.data;
    this.props.checkinUser(checkinDay);
  }

  renderQRCodeScanner() {
    return (
      <QRCodeScanner
        onRead={e => this.onSuccess(e)}
        showMarker={true}
        fadeIn={false}
      />
    );
  }

  renderInitialScreen() {
    if (this.props.loading) {
      return <ActivityIndicator />;
    }
    else if (this.props.qrIsOpen && !this.props.checkin) {
      return this.renderQRCodeScanner();
    } else if (!this.props.error && !this.props.checkin) {
      return (
        <View style={styles.initial}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={150}
            color={mainColor}
          />
          <View style={{ marginTop: 25 }}>
            <TouchableOpacity
              style={styles.buttonEntrar}
              onPress={() => this.props.toggleQRCodeScanner(true)}>
              <Text style={styles.textButtonEntrar}>Fazer Check-in</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return this.renderResult();
  }

  renderSuccess() {
    return (
      <View style={styles.initial}>
        <Icon
          name="check"
          size={150}
          color="darkgreen"
        />
        <Text style={styles.txtSuccess}>Check-in do dia confirmado!</Text>
      </View>
    );
  }

  renderError() {
    return (
      <View style={styles.initial}>
        <Icon
          name="cross"
          size={170}
          color="darkred"
        />
        <Text style={styles.txtError}>{this.props.error}</Text>
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity
            style={[styles.buttonEntrar, { borderColor: 'darkred' }]}
            onPress={() => {
              this.props.cleanFields();
              this.props.toggleQRCodeScanner(true);
            }}>
            <Text style={[styles.textButtonEntrar, { color: 'darkred' }]}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderResult() {
    if (this.props.error) {
      return this.renderError();
    }
    else if (this.props.checkin && !this.props.qrIsOpen) {
      return this.renderSuccess();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        {this.renderInitialScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  },
  initial: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtSuccess: {
    color: "darkgreen",
    fontSize: 20,
    fontFamily: 'Roboto-Light',
  },
  txtError: {
    color: "darkred",
    fontSize: 20,
    fontFamily: 'Roboto-Light',
  },
  buttonEntrar: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * .8
  },
  textButtonEntrar: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
    color: mainColor,
    paddingHorizontal: 30,
    paddingVertical: 10
  }
});

const mapStateToProps = state => ({
  checkin: state.CheckinReducer.checkin,
  error: state.CheckinReducer.error,
  loading: state.CheckinReducer.loading,
  qrIsOpen: state.CheckinReducer.qrIsOpen,
});

export default connect(mapStateToProps, {
  checkinUser,
  cleanFields,
  toggleQRCodeScanner,
  getUserCheckin
})(CheckinScreen);