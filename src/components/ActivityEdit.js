import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Header } from './common';
import ActivityForm from './ActivityForm';
import {eventSave} from '../actions';

class ActivityEdit extends Component {
  onButtonPress() {
    const {name, date, place,uid} = this.props;
    this.props.eventSave({name,date,place, uid: this.props.event.uid});
  }

  onBackButtonPress() {
    Actions.activitiesPage();
  }

  render() {
    return (
      <View>
        <ActivityForm {...this.props}/>
        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >Save</Button>
          <Button
          onPress={this.onBackButtonPress.bind(this)}
          >Back</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, place, date } = state.eventForm;
  return { name, place, date };
};

export default connect(mapStateToProps, {eventSave})(ActivityEdit);
