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
  }

  handleClick() {
    let username = this.refs.username.refs.input.value;
    let password = this.refs.password.refs.input.value;
    let confirmPassword = this.refs.confirmPassword.refs.input.value;

    if (confirmPassword === password) {
      this.props.onRegister(username, password);
    }
  }

  render() {
    return (
      <div style={[styles.base, styles.centerFlex]}>
          <Paper style={styles.boxForm}>
            <h1 style={styles.header}>Register an Account</h1>
            <TextField
              hintText="Username"
              ref="username"
              floatingLabelText="Username"
              type="text"
            />
            <TextField
              hintText="Password"
              ref="password"
              floatingLabelText="Password"
              type="password"
            />
            <TextField
              hintText="Confirm Password"
              ref="confirmPassword"
              floatingLabelText="Confirm Password"
              type="password"
            />
            <RaisedButton
              label="Register"
              primary={true}
              onClick={this.handleClick}
            />
          </Paper>
      </div>
    );
  }
}

Register = Radium(Register);
export default Register;
