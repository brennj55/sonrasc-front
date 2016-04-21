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
    let username = this.refs.username.refs.input.value;
    let password = this.refs.password.refs.input.value;
    this.props.onLogin(username, password);
  }

  handleRegister() {
    this.props.onRegisterClick();
  }

  render() {
    return (
      <div style={[styles.base, styles.centerFlex]}>
          <Paper style={styles.boxForm}>
            <h1 style={styles.header}>Login</h1>
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
            <div style={{margin: '.5em 0'}}>
              <RaisedButton
                label="Login"
                primary={true}
                style={{width: '100%'}}
                onClick={this.handleClick}
              />
            </div>
            <div style={{marginTop: '.5em'}}>
              <RaisedButton
                label="Register"
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
