import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [
  'items[].name',
  'items[].price',
  'items[].quantity',
  'items[].vat'
];

class InvoiceForm extends React.Component {

  render() {
    const {
      fields : { items }
    } = this.props;

    return (
      <form>

        {items.map((item, index) =>
        <div key={index}>
          <label>Item #{index + 1}</label>
          <div>
            <input type="text" placeholder="Item Name" field={item.name} />
            <input type="text" placeholder="Price" field={item.price} />
            <input type="text" placeholder="Quantity" field={item.quantity} />
          </div>
        </div>)}

        <button
          onClick={ event => {
            event.preventDefault();
            items.addField();
          }}
        >{'Add another item'}</button>
      </form>
    );
  }
}

InvoiceForm = reduxForm({
  form: 'uploadTextInvoice',
  fields
})(InvoiceForm);

export default InvoiceForm;
