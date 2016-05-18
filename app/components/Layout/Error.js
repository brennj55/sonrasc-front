import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { Router, Route, Link } from 'react-router';
import styles from '../../styles/flex.js';

class Error extends Component {

  render() {

    return (
      <div style={[styles.base, styles.centerFlex]}>
          <Paper style={styles.boxForm}>
            <h1 style={styles.header}>Error!</h1>
            There has been an error loading this page. Please reload the page
            and try again.
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

Error = Radium(Error);
export default Error;
