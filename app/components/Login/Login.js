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
  }

  handleClick() {
    let username = this.refs.username.refs.input.value;
    let password = this.refs.password.refs.input.value;
    this.props.onLogin(username, password);
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
            <RaisedButton
              label="Login"
              primary={true}
              onClick={this.handleClick}
            />
            <Link to="/register">Register a new account</Link>
          </Paper>
      </div>
    );
  }
}

Login = Radium(Login);
export default Login;
