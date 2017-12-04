import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Header } from './common';
import ActivityForm from './ActivityForm';
import {eventCreate} from '../actions';

class ActivityAdd extends Component {
  onButtonPress() {
    const {name, date, place} = this.props;
    this.props.eventCreate({name,date,place});
  }

  render() {
    return (
      <View>
        <ActivityForm />
        <CardSection>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >Add</Button>
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, place, date } = state.eventForm;
  return { name, place, date };
};

export default connect(mapStateToProps, {eventCreate})(ActivityAdd);
