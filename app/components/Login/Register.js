import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Register extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleUsernameUnfocus = this.handleUsernameUnfocus.bind(this);
    this.onValueOfUsernameChange = this.onValueOfUsernameChange.bind(this);
    this.handleBusinessUnfocus = this.handleBusinessUnfocus.bind(this);
    this.checkIsValidPassword = this.checkIsValidPassword.bind(this);
  }

  handleClick() {
    let username = this.refs.username.refs.input.value;
    let password = this.refs.password.refs.input.value;
    let firstName = this.refs.firstName.refs.input.value;
    let lastName = this.refs.surname.refs.input.value;
    let business = this.refs.business.refs.input.value;
    let confirmPassword = this.refs.confirmPassword.refs.input.value;

    this.props.onRegister(username, password, {
      firstName, lastName, business
    });
  }

  handleUsernameUnfocus(event) {
    if (event.target.value.length > 0) this.props.onUsernameChange(event.target.value.trim());
  }

  onValueOfUsernameChange(event) {
    this.props.onUsernameValueChange(event.target.value.trim());
  }

  handleBusinessUnfocus(event) {
    if (event.target.value.length > 0) this.props.onBusinessChange(event.target.value.trim());
  }

  checkIsValidPassword(event) {
    let password = this.refs.password.refs.input.value;
    let confirmPassword = this.refs.confirmPassword.refs.input.value;

    if (confirmPassword === password && password.length > 0) {
      this.props.passwordIsSame();
    }
    else {
      this.props.passwordsNotTheSame();
    }
  }

  render() {
    const {
      onUsernameChange, usernameFieldStyle,
      usernameText, onUsernameValueChange, registrationButtonEnabled,
      usernameValue, businessFieldStyle, businessText,
      passwordText, passwordStyle
    } = this.props;

    return (
      <div style={[styles.base, styles.centerFlex]}>
          <Paper style={styles.boxForm}>
            <h1 style={styles.header}>Register an Account</h1>
            <TextField
              hintText="Username"
              ref="username"
              floatingLabelText="Username"
              type="text"
              onBlur={this.handleUsernameUnfocus}
              onChange={this.onValueOfUsernameChange}
              value={usernameValue}
              errorText={usernameText}
              errorStyle={usernameFieldStyle}
            />
            <TextField
              hintText="Your Business Name"
              ref="business"
              floatingLabelText="Your Business Name"
              type="text"
              onBlur={this.handleBusinessUnfocus}
              errorText={businessText}
              errorStyle={businessFieldStyle}
            />
            <TextField
              hintText="First Name"
              ref="firstName"
              floatingLabelText="First Name"
              type="text"
            />
            <TextField
              hintText="Surname"
              ref="surname"
              floatingLabelText="Surname"
              type="text"
            />
            <TextField
              hintText="Password"
              ref="password"
              floatingLabelText="Password"
              type="password"
              onChange={this.checkIsValidPassword}
              errorText={passwordText}
              errorStyle={passwordStyle}
            />
            <TextField
              hintText="Confirm Password"
              ref="confirmPassword"
              floatingLabelText="Confirm Password"
              type="password"
              onChange={this.checkIsValidPassword}
              errorText={passwordText}
              errorStyle={passwordStyle}
            />
            <RaisedButton
              label="Register"
              style={{margin: '1em 0'}}
              primary={true}
              onClick={this.handleClick}
              disabled={registrationButtonEnabled}
            />
          </Paper>
      </div>
    );
  }
}

Register = Radium(Register);
export default Register;
