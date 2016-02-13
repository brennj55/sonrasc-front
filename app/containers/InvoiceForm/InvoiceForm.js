import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Address from '../../components/Address.js';
import Items from './Items.js';
import { fieldName } from '../../utils/string.js';

import Radium from 'radium';
import styles from './styles.js';
import { formatDate } from '../../utils/date.js';

import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { DatePickerWrapper } from '../../components/MaterialUIWrappers.js';


// TODO: validation on fields.
// TODO: icons for input fields.
// TODO: dont let submission/wipe empty items.
// TODO: upload image with
// TODO: calculated fields for Quantity * price + VAT
// TODO: business owner
// TODO: server side prefilling of fields

export const fields = [
  'date',
  'addressFrom.name',
  'addressFrom.address1',
  'addressFrom.address2',
  'addressFrom.town',
  'addressFrom.county',
  'addressFrom.country',
  'business.phone',
  'business.email',
  'items[].name',
  'items[].price',
  'items[].quantity',
  'items[].VAT',
  'items[].total',
  'invoiceImage',
  'invoiceNumber',
  'email',
  'telephone'
];

const RaisedButtonHelper = (props) => {
  return (<RaisedButton
    onClick={ event => {
    props.func();
    }}
    disabled={props.submitting}
    label={props.text}
  />);
};

class InvoiceForm extends React.Component {

  render() {
    const {
      fields : {
        date,
        items,
        business,
        addressTo,
        addressFrom,
        invoiceImage,
        invoiceNumber,
        email,
        telephone
      },
      submitting,
      handleSubmit
    } = this.props;

    return (
      <form style={styles.base} key="InvoiceForm" onSubmit={handleSubmit} >
        <h1 style={styles.header}>Upload Invoice</h1>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Invoice Image</label>
          <div style={styles.flex2}>
            <RaisedButton label="Upload Image" {...invoiceImage}>
              <input type="file" {...invoiceImage} value={ null } style={styles.exampleImageInput} />
            </RaisedButton>
          </div>
        </div>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Date Sent</label>
          <DatePickerWrapper
            {...date}
            formatDate={formatDate}
            hintText={"Date"}
            autoOk={true}
            style={styles.flex2}
          />
        </div>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Sent From</label>
          <Address address={addressFrom} style={styles.columnContainer} />
        </div>

        <h2 style={[styles.subheader]}>Items</h2>
        <div style={[styles.innerFlexNoWrap, styles.space]}>
          <RaisedButtonHelper
            text="Add item"
            func={() => items.addField() }
            style={{alignSelf: 'flex-end'}}
          />
          <Items items={items} />
        </div>

        <h2 style={[styles.subheader]}>Other Details</h2>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Invoice Number</label>
          <TextField {...invoiceNumber} style={styles.flex2} hintText="Hint Text" />
        </div>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Email</label>
          <TextField {...email} style={styles.flex2} hintText="Hint Text" />
        </div>

        <div style={[styles.innerFlex, styles.space]}>
          <label style={[styles.flex1, styles.label]}>Telephone</label>
          <TextField {...telephone} style={styles.flex2} hintText="Hint Text" />
        </div>

        <div style={styles.space}>
          <RaisedButton
            type="submit"
            disabled={submitting}
            primary={true}
            className="SubmitItems"
            label={"Submit"}
            style={styles.flex2}
          >

          </RaisedButton>
        </div>

      </form>
    );
  }
}

InvoiceForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

InvoiceForm = Radium(InvoiceForm);
InvoiceForm = reduxForm({
  form: 'uploadTextInvoice',
  fields
})(InvoiceForm);

export default InvoiceForm;
