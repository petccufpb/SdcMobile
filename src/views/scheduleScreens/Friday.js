import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, FlatList, Linking } from "react-native";

import {
  Card,
  ScheduleHeader,
  ScheduleContent,
  ScheduleItem,
  ActivityIndicator
} from "../../components/";

import { createAlert } from "../../util";
import { getGameDay, getGameDayGames } from "../../actions/GameDayAction";

class Friday extends Component {
  constructor(props) {
    super(props);
    if (!this.props.gameday) {
      this.props.getGameDay();
    }
    if (this.props.games.length === 0) {
      this.props.getGameDayGames();
    }
  }
  
  renderItem(game) {
    return (
      <ScheduleItem
        iconName={this.props.gameday.icon}
        title={game.name}
        time={this.props.gameday.time}        
        onClick={
          () => createAlert(
            "Inscrição", 
            "Deseja abrir o formulário para inscrição?",
            () => Linking.openURL(game.form),
            () => false
          )
        }
      />
    );
  }

  renderList() {
    return (
      <FlatList
        data={this.props.games}
        extraData={this.props}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => this.renderItem(item)}
        onRefresh={this.props.getGameDayGames}
        refreshing={this.props.loading}
      />
    );
  }

  renderActivityIndicator() {
    return <ActivityIndicator />;
  }

  renderCard() {
    if (this.props.gameday) {
      return (
        <Card>
          <ScheduleHeader
            iconName={this.props.gameday.icon}
            title={this.props.gameday.title}
            subtitle="Sexta-feira 09/02"
          />
          <ScheduleContent>
            {this.props.error ? <Text>{this.props.error}</Text> : this.renderList()}
          </ScheduleContent>
        </Card>
      );
    }
    return this.renderActivityIndicator();
  }

  render() {
    return this.renderCard();
  }
}

const mapStateToProps = state => ({
  gameday: state.GameDayReducer.gameday,
  games: state.GameDayReducer.games,
  loading: state.GameDayReducer.loading,
  error: state.GameDayReducer.error,
});
export default connect(mapStateToProps, { getGameDay, getGameDayGames })(Friday);