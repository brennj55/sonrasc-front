import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

// TODO: validation on fields.
// TODO: dont let submission/wipe empty items.
// TODO: address to, address from
// TODO: upload image with
// TODO: date
// TODO: calculated fields for Quantity * price + VAT
// TODO: business owner 
// TODO: server side prefilling of fields

export const fields = [
  'items[].Name',
  'items[].Price',
  'items[].Quantity',
  'items[].VAT'
];

const HelperButton = (props) => {
  return (<button
    onClick={ event => {
      event.preventDefault();
      props.func();
    }}
  >{ props.text }</button>);
};

// TODO: Move to utils class.
const fieldName = (field) => field.slice(field.lastIndexOf(".") + 1);
const ItemProperty = ({item}) => ( <input
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
        <Items items={items} />
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
