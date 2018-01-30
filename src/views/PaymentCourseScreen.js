import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { connect } from "react-redux";

import { payCourse, cleanFields, getCourses } from "../actions/CourseAction";
import { mainColor } from "../util";

class PaymentCourseScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: navigation.state.params.title,
    headerLeft: <Icon.Button name="chevron-left" backgroundColor={mainColor} onPress={() =>
      navigation.goBack()} />
  });

  renderQRCodeScanner(course) {
    return (
      <QRCodeScanner
        onRead={e => this.props.payCourse(e.data, course)}
        showMarker={true}
        fadeIn={false}
      />
    );
  }

  renderError() {
    return (
      <View style={styles.result}>
        <Icon
          name="cross"
          size={170}
          color="darkred"
        />
        <Text style={styles.txtError}>{this.props.paymentError}</Text>
        <Button
          title="Tentar novamente"
          onPress={
            () => {
              this.props.cleanFields();
            }
          }
          color={mainColor}
        />
      </View>
    );
  }

  renderInfo() {
    if (!this.props.paymentError && !this.props.paymentSuccess) {
      return (
        <View style={styles.info}>
          <Text style={styles.text}>Pagamento: 1kg de alimento não perecível.</Text>
          <Text style={styles.text}>Instruções: Escanear o QRCode no momento do pagamento.</Text>
        </View>
      );
    }
  }

  renderSuccess() {
    return (
      <View style={styles.result}>
        <Icon
          name="check"
          size={150}
          color="darkgreen"
        />
        <Text style={styles.txtSuccess}>Pagamento confirmado!</Text>
        <Button
          title="Voltar"
          onPress={
            () => {
              this.props.navigation.goBack();
              this.props.getCourses();
            }
          }
          color={mainColor}
        />
      </View>
    );
  }

  renderResult(course) {
    if (this.props.paymentSuccess) {
      return this.renderSuccess();
    }
    else if (this.props.paymentError) {
      return this.renderError();
    }
    return this.renderQRCodeScanner(course);
  }

  render() {
    const { state } = this.props.navigation;
    var course = state.params;
    return (
      <View style={styles.container}>
        {this.renderInfo()}
        {this.renderResult(course)}
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
  info: {
    margin: 20
  },
  text: {
    color: mainColor,
    fontSize: 15,
    padding: 10
  },
  txtError: {
    color: "darkred",
    fontSize: 20
  },
  txtSuccess: {
    color: "darkgreen",
    fontSize: 20
  },
  result: {
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const mapStateToProps = state => ({
  paymentError: state.CourseReducer.paymentError,
  paymentSuccess: state.CourseReducer.paymentSuccess,
});

export default connect(mapStateToProps, {
  payCourse,
  cleanFields,
  getCourses
})(PaymentCourseScreen);