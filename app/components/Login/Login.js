import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import Radium from 'radium';
import { Router, Route, Link } from 'react-router';
import styles from '../../styles/flex.js';

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleClick() {
    let username = this.refs.username.refs.input.value.toLowerCase();
    let password = this.refs.password.refs.input.value;

    if (!username || !password) this.props.onCredentialsError();
    if (username && password) this.props.onLogin(username, password);
  }

  handleRegister() {
    this.props.onRegisterClick();
  }

  render() {
    const { userError, passwordError } = this.props;

    return (
      <div style={[styles.base, styles.centerFlex]}>
          <Paper style={styles.boxForm}>
            <h1 style={styles.header}>Login</h1>
            <TextField
              hintText="Username"
              ref="username"
              errorText={userError}
              floatingLabelText="Username"
              type="text"
            />
            <TextField
              hintText="Password"
              ref="password"
              errorText={passwordError}
              floatingLabelText="Password"
              type="password"
            />
            <div style={{margin: '1em 0'}}>
              <RaisedButton
                label="Login"
                primary={true}
                style={{width: '100%'}}
                onClick={this.handleClick}
              />
            </div>
            <div>
              <RaisedButton
                label="Register your business"
                secondary={true}
                style={{width: '100%'}}
                onClick={this.handleRegister}
              />
            </div>
          </Paper>
      </div>
    );
  }
}

Login = Radium(Login);
export default Login;
