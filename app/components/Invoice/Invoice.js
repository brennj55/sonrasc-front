import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Invoice extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { date, fetching } = this.props;
    if (!fetching) {
      return (
        <div style={styles.base}>
          <h1 style={[styles.header, styles.spaceBetween]}>
            Invoice
            <span>Go Back!</span>
          </h1>
          <p>Hello is it on {date}</p>
        </div>
      );
    }

    else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Invoices Uploaded</h1>
        <Spinner />
      </div>
    );
  }
}

Invoice = Radium(Invoice);
export default Invoice;
