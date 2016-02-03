import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Address from '../../components/Address.js';
import { fieldName } from '../../utils/string.js';

import Radium from 'radium';
import styles from './styles.js';

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
  >{ props.text }</FlatButton>);
};

const ItemProperty = ({ item }) => ( <TextField
  type="text"
  placeholder={fieldName(item.name)}
  {...item} />
);

const DateGetter = ({ date }) => (
  <div style={styles.space} key="DateGetter">
    <label>Date Sent:</label>
    <DatePickerWrapper
      {...date}
      hintText={"Date"}
      autoOk={true}
    />
  </div>
);

const Items = ({ items }) => (
  <div>
    { items.map((item, index) =>
    <div key={index}>
      <label> Item #{index + 1} </label>
      { Object.keys(item).map(field => <ItemProperty item={item[field]} key={field} />) }
      <FlatButtonHelper text="Remove" func={() => items.removeField(index) } />
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
      <form style={styles.base} key="InvoiceForm" onSubmit={handleSubmit}>
        <h2
          key="header"
          style={styles.header}
        >Upload Invoice</h2>

        <DateGetter date={date} />

        <div>
          <label>Sent to:</label>
          <Address address={addressTo} />
          <label>Sent From:</label>
          <Address address={addressFrom} />
        </div>

        <div>
          { Object.keys(business).map(field => <ItemProperty item={business[field]} key={field} />) }
        </div>

        <div>
          <label>Item List:</label>
          <Items items={items} />
          <RaisedButtonHelper text="Add item" func={() => items.addField() } />
        </div>

        <div style={styles.space}>
          <RaisedButton type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
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
