import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Header, Input, Card, CardSection, Button, Spinner } from './common';
import {
  loginUser,
  logoutUser,
  passwordChanged,
  emailChanged
} from '../actions';

class LoginPage extends Component {
  onLoginButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderLoginButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={() => this.onLoginButtonPress()}>Login</Button>;
  }

  renderLogoutButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={() => this.props.logoutUser()}>Logout</Button>;
  }

  renderLogin() {
    if (this.props.user) {
      return (
        <View>
          <CardSection>
            <Text>Logged in as {this.props.user.email}</Text>
          </CardSection>
          <CardSection>{this.renderLogoutButton()}</CardSection>
        </View>
      );
    }

    return (
      <View>
        <CardSection>
          <Input
            focus
            label="email"
            placeholder="ege@gmail.com"
            value={this.props.email}
            onChangeText={text => this.props.emailChanged(text)}
          />
        </CardSection>
        <CardSection>
          <Input
            secure
            label="password"
            placeholder="password"
            value={this.props.password}
            onChangeText={text => this.props.passwordChanged(text)}
          />
        </CardSection>
        <CardSection>{this.renderLoginButton()}</CardSection>
        <Text>{this.props.error}</Text>
      </View>
    );
  }

  render() {
    return <View style={styles.pageStyle}>{this.renderLogin()}</View>;
  }
}

const styles = {
  pageStyle: {
    flex: 1
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error, user } = auth;
  return { email, password, loading, error, user };
};

export default connect(mapStateToProps, {
  loginUser,
  logoutUser,
  emailChanged,
  passwordChanged
})(LoginPage);

/*
  <CardSection>
          <Text>{this.props.error}</Text>
        </CardSection>
        */
