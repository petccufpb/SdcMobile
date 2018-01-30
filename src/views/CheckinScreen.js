import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from "react-redux";

import { mainColor, checkDate } from '../util';
import { checkinUser, cleanFields, toggleQRCodeScanner, getUserCheckin } from "../actions/CheckinAction";
import { ActivityIndicator } from "../components";

class CheckinScreen extends Component {
  static navigationOptions = {
    title: 'Check-in',
    drawerLabel: 'Check-in',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="check" size={20} color={focused ? mainColor : 'gray'} />
    )
  }

  componentWillMount() {
    this.props.getUserCheckin();
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
          <View style={{ marginTop: 10 }}>
            <Button
              title="Fazer Check-in"
              onPress={() => this.props.toggleQRCodeScanner(true)}
              color={mainColor}
            />
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
        <Button
          title="Tentar novamente"
          onPress={
            () => {
              this.props.cleanFields();
              this.props.toggleQRCodeScanner(true);
            }
          }
          color={mainColor}
        />
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
        {this.renderInitialScreen()}        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  initial: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtSuccess: {
    color: "darkgreen",
    fontSize: 20
  },
  txtError: {
    color: "darkred",
    fontSize: 20
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