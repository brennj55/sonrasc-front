import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import FlatButton from 'material-ui/lib/flat-button';

class Invoice extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { date, fetching, onClickBackButton,
      totalCost, uploadedBy } = this.props;

    if (!fetching) {
      return (
        <div style={styles.base}>
          <h1 style={[styles.header, styles.spaceBetween]}>
            Invoice
            <FlatButton
              label="Go back"
              secondary={true}
              onClick={onClickBackButton}
            />
          </h1>

          <span>Date sent</span> {date}
          <span>Uploaded by</span> {uploadedBy}

          <div style={[styles.space]}>
            <h2 style={[styles.subheader, styles.spaceBetween]}>Items</h2>
            <h3 style={[styles.subheader, styles.marginSpace, styles.spaceBetween]}>
              Total Cost
              <span>€{totalCost.toFixed(2)}</span>
            </h3>
          </div>
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
