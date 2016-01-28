import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Address from './Address.js';
import { fieldName } from '../utils/string.js';

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import { DatePickerWrapper } from './MaterialUIWrappers.js';
import Paper from 'material-ui/lib/paper';

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
  'addressTo.street',
  'addressTo.town',
  'addressTo.county',
  'addressTo.country',
  'addressFrom.name',
  'addressFrom.street',
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
      event.preventDefault();
      props.func();
    }}
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

const ItemProperty = ({item}) => ( <TextField
  type="text"
  placeholder={fieldName(item.name)}
  {...item} />
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
      }
  } = this.props;

    return (
      <form>
        <h2>Upload Invoice</h2>

        <div>
          <label>Date Sent:</label>
          <DatePickerWrapper {...date} hintText={"Date"} autoOk={true} />
        </div>

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

      </form>
    );
  }
}

InvoiceForm.propTypes = {
  fields: PropTypes.object.isRequired
};

InvoiceForm = reduxForm({
  form: 'uploadTextInvoice',
  fields
})(InvoiceForm);

export default InvoiceForm;
