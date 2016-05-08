import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import FlatButton from 'material-ui/FlatButton';
import ItemsTable from './ItemsTable';


let InvoiceField = ({ labelText, value, key }) => (
  <div key={key} style={[styles.innerFlex, styles.space]}>
    <label style={[styles.flex1, styles.label]}>{labelText}</label>
    <span style={styles.flex1}>{value}</span>
  </div>
);

class Invoice extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const {
      date, fetching, onClickBackButton,
      totalCost, uploadedBy, address,
      business, items
    } = this.props;

    let fields = [
      {value: business, labelText: "Invoice sent from"},
      {value: date, labelText: "Date sent"},
      {value: uploadedBy, labelText: "Uploaded by"},
      {value: address, labelText: "Address of business"}
    ];


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

          {fields.map((field, key) => (
            <InvoiceField
              value={field.value}
              labelText={field.labelText}
              key={key}
            />))
          }

          <div style={[styles.space]}>
            <h2 style={[styles.subheader, styles.spaceBetween]}>Items</h2>
            <ItemsTable items={items} />

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

InvoiceField = Radium(InvoiceField);
Invoice = Radium(Invoice);
export default Invoice;
