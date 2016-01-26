import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [
  'items[].name',
  'items[].price',
  'items[].quantity',
  'items[].vat'
];

const HelperButton = (props) => {
  return (<button
    onClick={ event => {
      event.preventDefault();
      props.func();
    }}
  >{ props.text }</button>);
};

const ItemProperties = ({ items }) => (
  <div>
    { items.map((item, index) =>
    <div key={index}>
      <label> Item #{index + 1} </label>
      <input type="text" placeholder="Item Name" {...item.name} />
      <input type="text" placeholder="Price" {...item.price} />
      <input type="text" placeholder="Quantity" {...item.quantity} />
      <HelperButton text="-" func={() => items.removeField(index) } />
    </div>
    )}
  </div>
);

class InvoiceForm extends React.Component {

  render() {
    const {
      fields : { items }
  } = this.props;

    return (
      <form>
        <ItemProperties items={items} />
        <HelperButton text="Add item" func={() => items.addField() } />
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
