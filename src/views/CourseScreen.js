import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import firebase from "firebase";

import { mainColor, createAlert, createNOptionsAlert, createOkAlert } from '../util';
import {
  getCourses,
  registerCourseSubscriber,
  unregisterCourseSubscriber
} from "../actions/CourseAction";
import {
  Card,
  CardHeader,
  CardContent,
  ActivityIndicator
} from "../components";

class CourseScreen extends Component {
  static navigationOptions = {
    title: 'Minicursos',
    drawerLabel: 'Minicursos',
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name="code" size={20} color={focused ? mainColor : 'gray'} />
    )
  }

  componentWillMount() {
    if (this.props.courses.length === 0) {
      this.props.getCourses();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.reload) {
      this.props.getCourses();
    }
  }

  isSubscriber(course) {
    const currentUserUID = firebase.auth().currentUser.uid;
    var isSub = false;
    if (course.subs) {
      Object.keys(course.subs).forEach(subUserUID => {
        const paid = course.subs[subUserUID]["paid"];
        if (currentUserUID === subUserUID) {
          isSub = true;
          return;
        }
      })
    }
    return isSub;
  }

  verifyPayment(course) {
    const currentUserUID = firebase.auth().currentUser.uid;
    var isPaidOut = false;
    if (course.subs) {
      Object.keys(course.subs).forEach(subUserUID => {
        if (currentUserUID === subUserUID) {
          isPaidOut = course.subs[subUserUID]["paid"];
          return;
        }
      })
    }
    return isPaidOut;
  }

  renderSubscribeButton(course) {
    if (this.isSubscriber(course)) {
      if (this.verifyPayment(course)) {
        // Pagou o minicurso
        return (
          <Button
            title={"Inscrito!"}
            onPress={
              () => createAlert(
                "Deseja cancelar sua inscrição?",
                "",
                () => this.props.unregisterCourseSubscriber(course),
                () => false,
                "Sim"
              )
            }
            color="green"
          />
        );
      }
      else {
        return (
          <Button
            title={"Finalizar inscrição"}
            onPress={
              () => createNOptionsAlert(
                "Pagamento",
                payamentWarning,
                [            
                  {text: 'Cancelar', onPress: false},
                  {text: 'Anular ', onPress: () => this.props.unregisterCourseSubscriber(course)},
                  {text: 'Pagar', onPress: false},
                ]
              )
            }
            color="darkorange"
          />
        );
      }

    }
    return (
      <Button
        title={course.vacancies <= 0 ? "Esgotado!" : "Inscrever-se"}
        disabled={course.vacancies <= 0}
        onPress={
          () => createAlert(
            "Atenção!",
            payamentWarning,
            () => this._registerCourseSubscriber(course),
            () => false
          )
        }
        color={mainColor}
      />
    );
  }

  getCurrentUserCourses() {
    const currentUserUID = firebase.auth().currentUser.uid;
    const myCourses = [];
    this.props.courses.forEach(course => {
      if (this.isSubscriber(course)) {
        myCourses.push(course);
      }
    });

    return myCourses;
  }

  _registerCourseSubscriber(desiredCourse) {
    // Verificar se ja esta inscrito em algum minicurso no mesmo horario
    const userCourses = this.getCurrentUserCourses();
    var fail = false;
    userCourses.forEach(course => {
      if (desiredCourse.time === course.time) {
        createOkAlert("Ops!", "Voce nao pode se inscrever em minicursos de mesmo horario!", false)
        fail = true;
        return;
      }      
    });
    if (!fail) {
      this.props.registerCourseSubscriber(desiredCourse);
    }    
  }

  renderItem(course) {
    var txtVacancies = "";
    if (course.vacancies <= 0)
      txtVacancies = "0 vaga";
    else if (course.vacancies === 1)
      txtVacancies = "Última vaga!";
    else
      txtVacancies = `${course.vacancies} vagas`;

    return (
      <Card>
        <CardHeader speakerKey={course.speaker} />
        <CardContent
          imageURL={course.imageURL}
          title={course.title}
          date={course.date}
          time={course.time}
          local={course.local}
          description={course.description}
        />
        <View style={styles.footer}>
          <Text style={styles.vacancies}>{txtVacancies}</Text>
          {this.renderSubscribeButton(course)}
        </View>
      </Card>
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderList() {
    if (this.props.courses.length !== 0) {
      return (
        <FlatList
          data={this.props.courses}
          extraData={this.props}
          style={{ flex: 1 }}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index}
          onRefresh={this.props.getCourses}
          refreshing={this.props.loading}
        />
      );
    }
    return this.renderActivityIndicator();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.reload ? createOkAlert("Sucesso!", "", false) : false}
        {
          this.props.error
            ? createOkAlert("Ops!", this.props.error, this.props.getCourses.bind(this))
            : this.renderList()
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  vacancies: {
    color: mainColor,
  }
});

const payamentWarning = "Para garantir sua vaga neste minicurso é necessário entregar, " +
"na bancada do evento, 1kg de alimento não perecível até o dia anterior " +
"ao seu minicurso!";

const mapStateToProps = state => ({
  courses: state.CourseReducer.courses,
  error: state.CourseReducer.error,
  loading: state.CourseReducer.loading,
  reload: state.CourseReducer.reload,
});

export default connect(mapStateToProps, {
  getCourses,
  unregisterCourseSubscriber,
  registerCourseSubscriber
})(CourseScreen);