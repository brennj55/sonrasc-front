import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [
  'name',
  'price',
  'quantity',
  'vat'
];

const InputFieldHeaders = () => {
  return (
    <div>
      <label>Name</label>
      <label>Quantity</label>
      <label>Price</label>
    </div>);
};

const InputFields = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
      />
      <input
        type="text"
        placeholder="Quantity"
      />
      <input
        type="text"
        placeholder="Price"
      />
      <button>+</button>
    </div>);
};

class InvoiceForm extends React.Component {


  render() {
    const {
      fields : {name, quantity, price, vat}
    } = this.props;

    return (
      <form>
        <div>
          <InputFieldHeaders />
          <div>
            <input
              type="text"
              placeholder="Name"
              {...name}
            />
            <input
              type="text"
              placeholder="Quantity"
              {...quantity}
            />
            <input
              type="text"
              placeholder="Price"
              {...price}
            />
            <button>+</button>
          </div>
        </div>
      </form>
    );
  }
}

InvoiceForm = reduxForm({
  form: 'invoice',
  fields
})(InvoiceForm);

export default InvoiceForm;
