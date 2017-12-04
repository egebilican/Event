import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { fetchEvents, fetchCommonEvents } from '../actions';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header, Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ActivitiesPage extends Component {
  state = { dataSource: {} };

  componentWillMount() {
    this.props.fetchEvents();
    this.props.fetchCommonEvents();
    this.setState({ dataSource: this.props.events });
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.setState({ dataSource: nextProps.events });
  }

  onRowPress(event) {
    Actions.activityEdit({ event });
  }

  renderAddButton() {
    if (firebase.auth().currentUser) {
      return (
        <CardSection>
          <Button
            onPress={() => {
              Actions.activityAdd();
            }}
          >
            Add new event
          </Button>
        </CardSection>
      );
    }
  }

  renderListItem(event) {
    return (
      <TouchableWithoutFeedback onPress={() => this.onRowPress(event)}>
        <View>
          <Card>
            <CardSection>
              <Text>{event.name}</Text>
            </CardSection>
            <CardSection>
              <Text>{event.place}</Text>
            </CardSection>
            <CardSection>
              <Text>{event.date}</Text>
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={styles.pageStyle}>
        <Header headerText="Events" />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => this.renderListItem(item)}
        />
        {this.renderAddButton()}
      </View>
    );
  }
}

const styles = {
  pageStyle: {
    flex: 1
  }
};

//bunu ogren
const mapStateToProps = state => {
  const events = _.map(state.events, (val, uid) => {
    return { ...val, uid };
  });
  return { events };
};

export default connect(mapStateToProps, { fetchEvents, fetchCommonEvents })(
  ActivitiesPage
);
