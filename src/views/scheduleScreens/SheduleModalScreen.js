import React, { Component } from "react";
import {
  Alert,
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";
import firebase from "firebase";
import { REF_DB_SPEAKERS } from "../../actions/refDatabase";
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from 'react-native-user-avatar';
import Hr from 'react-native-hr-plus';
import moment from 'moment';
import { ActivityIndicator } from '../../components';
import { mainColor } from "../../util";

export default class ScheduleModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { speaker: null, error: "" };
    this.getSpeaker(this.props.navigation.state.params.speaker);
  }

  getSpeaker(speakerID) {
    firebase.database().ref(REF_DB_SPEAKERS + speakerID).once('value', snapshot => {
      this.setState({ speaker: snapshot.val() });
    })
      .catch(error => dispatch(this.setState({ ...this.state, error })));
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Sobre',
    headerStyle: { backgroundColor: '#f5f5f5', elevation: 5 },
    headerTintColor: 'gray',
    headerLeft: <Icon.Button size={40} name="ios-close-outline" color={'gray'} backgroundColor={'#f5f5f5'}
      onPress={() => navigation.goBack(null)} />,
  });

  render() {
    const { state } = this.props.navigation;
    const sheduleItem = state.params;

    if (!this.state.speaker) {
      return <ActivityIndicator />
    }
    const { name, specialization, imageURL } = this.state.speaker;

    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fafafa' }}>
        {/* <CardHeader speakerKey={sheduleItem.speaker} /> */}
        <View style={{ flex: 0.3, flexDirection: 'row' }}>
          <Image
            style={styles.canvas}
            source={{ uri: sheduleItem.imageURL }}
          />
        </View>
        <View style={{ flex: 0.7, flexDirection: 'column' }}>
          <View style={{ margin: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <UserAvatar size='60' name='Sa' src={imageURL} />
            <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>{name}</Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14, textAlign: 'center' }}>{specialization}</Text>
          </View>
          <Hr color='#EEEEEE' width={1}>
            <Text style={styles.textWithDivider}>{' INFORMAÇÕES '}</Text>
          </Hr>
          <View style={{ margin: 16 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={{ flexDirection: 'column', flex: 0.33 }}>
                <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16 }}>{'Horário'}</Text>
                <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>{sheduleItem.time}</Text>
              </View>
              <View style={{ flexDirection: 'column', flex: 0.33 }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16 }}>{'Data'}</Text>
                  <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>{String(moment(new Date(sheduleItem.date)).format('DD/MM/YY'))}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'column', flex: 0.33 }}>
                <View style={{ alignSelf: 'center' }}>
                  <Text style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16 }}>{'Local'}</Text>
                  <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>{sheduleItem.local}</Text>
                </View>
              </View>
            </View>
            <Text style={{ marginTop: 10, fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16 }}>{'Título'}</Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14 }}>{sheduleItem.title}</Text>
            <Text style={{ marginTop: 10, fontFamily: 'Roboto-Light', fontWeight: 'bold', fontSize: 16 }}>{'Descrição'}</Text>
            <Text style={{ fontFamily: 'Roboto-Light', fontSize: 14, textAlign: 'justify' }}>{sheduleItem.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 150
  },
  textWithDivider: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Light',
  }
});