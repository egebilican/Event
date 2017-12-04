import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Card, CardSection, Input, Button, Header } from './common';
import { eventUpdate } from '../actions';

class ActivityForm extends Component {
  componentWillMount() {
    if (this.props.event) {
      const { name, date, place } = this.props.event;
      this.props.eventUpdate({ prop: 'name', value: name });
      this.props.eventUpdate({ prop: 'date', value: date });
      this.props.eventUpdate({ prop: 'place', value: place });
    }
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Event name"
            value={this.props.name}
            onChangeText={value =>
              this.props.eventUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Date"
            placeholder="01.01.2018"
            value={this.props.date}
            onChangeText={value =>
              this.props.eventUpdate({ prop: 'date', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Place"
            placeholder="Galata Studyo"
            value={this.props.place}
            onChangeText={value =>
              this.props.eventUpdate({ prop: 'place', value })}
          />
        </CardSection>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, place, date } = state.eventForm;
  return { name, place, date };
};

export default connect(mapStateToProps, { eventUpdate })(ActivityForm);
