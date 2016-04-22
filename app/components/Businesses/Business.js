import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import FlatButton from 'material-ui/lib/flat-button';

// let InvoiceField = ({ labelText, value, key }) => (
//   <div key={key} style={[styles.innerFlex, styles.space]}>
//     <label style={[styles.flex1, styles.label]}>{labelText}</label>
//     <span style={styles.flex1}>{value}</span>
//   </div>
// );

class Business extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    // const {
    //   date, fetching, onClickBackButton,
    //   totalCost, uploadedBy, address,
    //   business, items
    // } = this.props;

    // let fields = [
    //   {value: business, labelText: "Business Name"},
    //   {value: date, labelText: "Date sent"},
    //   {value: uploadedBy, labelText: "Uploaded by"},
    //   {value: address, labelText: "Address of business"}
    // ];
    // {fields.map((field, key) => (
    //   <InvoiceField
    //     value={field.value}
    //     labelText={field.labelText}
    //     key={key}
    //   />))
    // }


    if (true) {
      return (
        <div style={styles.base}>
          <h1 style={[styles.header, styles.spaceBetween]}>
            Business Name here
            <FlatButton
              label="Go back"
              secondary={true}
              //onClick={onClickBackButton}
            />
          </h1>

          <div style={[styles.space]}>
            <h2 style={[styles.subheader, styles.spaceBetween]}>Invoices</h2>
          </div>
        </div>
      );
     }

     else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Business...</h1>
        <Spinner />
      </div>
    );
  }
}

Business = Radium(Business);
export default Business;
