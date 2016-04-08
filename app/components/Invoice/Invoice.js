import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Invoice extends Component {

  render() {
    const { children } = this.props;

    return (
      <div encType="multipart/form-data" style={styles.base}>
        <h1 style={styles.header}>I am an invoice.</h1>
      </div>
    );
  }
}

export default Invoice;
