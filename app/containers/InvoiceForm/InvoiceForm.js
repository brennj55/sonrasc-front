import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Address from '../../components/Address.js';
import { fieldName } from '../../utils/string.js';

import Radium from 'radium';
import styles from './styles.js';
import { formatDate } from '../../utils/date.js';

import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
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
  'addressTo.name',
  'addressTo.address1',
  'addressTo.address2',
  'addressTo.town',
  'addressTo.county',
  'addressTo.country',
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
  'items[].VAT'
];

const RaisedButtonHelper = (props) => {
  return (<RaisedButton
    onClick={ event => {
    //event.preventDefault();
    props.func();
    }}
    disabled={props.submitting}
  >{ props.text }</RaisedButton>);
};

const FlatButtonHelper = (props) => {
  return (<FlatButton
    onClick={ event => {
    event.preventDefault();
    props.func();
    }}
    style={props.style}
  >{ props.text }</FlatButton>);
};

const ItemProperty = (props) => (
  <TextField
    type="text"
    placeholder={fieldName(props.item.name)}
    {...props.item}
    style={props.style}
  />
);

const Items = ({ items }) => (
  <div>
    { items.map((item, index) =>
    <div key={index} style={styles.innerFlex}>
      <label style={styles.flex1}> Item {index + 1}</label>
      { Object.keys(item).map(field => <ItemProperty style={styles.flex1} item={item[field]} key={field} />) }
      <FlatButtonHelper style={styles.flex1} text="Remove" func={() => items.removeField(index) } />
    </div>
    )}
  </div>
);

class InvoiceForm extends React.Component {

  render() {
    const {
      fields : {
        date,
        items,
        business,
        addressTo,
        addressFrom
      },
      submitting,
      handleSubmit
    } = this.props;

    return (
      <form style={styles.base} key="InvoiceForm" onSubmit={handleSubmit} >
        <h1 style={styles.header}>Upload Invoice</h1>

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
        <div>
          <Items items={items} />
          <div style={styles.space}>
            <RaisedButtonHelper text="Add item" func={() => items.addField() } />
          </div>
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
