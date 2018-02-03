import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, View, Text, StyleSheet, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr-plus';
import UserAvatar from 'react-native-user-avatar';
import { mainColor } from '../util';
import { getAllTalksAndSpeakers } from '../actions/TalkAction';

class SpeakerScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderTimeline: false,
    }

    if (this.props.speakers.length === 0) {
      this.props.getAllTalksAndSpeakers();
    }
  }

  static navigationOptions = {
    title: 'Palestrantes',
    drawerLabel: 'Palestrantes',
    headerStyle: { backgroundColor: '#f5f5f5', elevation: 5 },
    drawerIcon: ({ focused, tintColor }) => (
      <Icon name='ios-mic-outline' size={40} color={focused ? 'white' : 'gray'} />
    ),
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ renderFlatlist: true }) }, 0);
  }

  renderItem(item) {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ margin: 16, flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
            <UserAvatar size='60' name={item.name} src={item.imageURL} />
          </View>
          <View style={{ marginTop: 5, marginLeft: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular', color: 'gray', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'Roboto-Regular', color: 'gray' }}>{item.specialization}</Text>
          </View>
        </View>
        <Hr color='#EEEEEE' width={1} />
      </View>
    );
  }

  render() {
    const { renderFlatlist } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#e0e0e0'
          barStyle='dark-content'
        />
        {!renderFlatlist &&
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        }
        { renderFlatlist &&
          <FlatList
          data={this.props.speakers}
          style={{ flex: 1 }}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index}
          onRefresh={this.props.getAllTalksAndSpeakers}
          refreshing={this.props.loading}
        />
        }
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
});

const mapStateToProps = state => ({
  speakers: state.TalkReducer.speakers,
  loading: state.TalkReducer.loading,
  error: state.TalkReducer.error
});

export default connect(mapStateToProps, { getAllTalksAndSpeakers })(SpeakerScreen);