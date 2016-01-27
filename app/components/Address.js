import React, {Component, PropTypes } from 'react';
import { fieldName } from '../utils/string.js';
import TextField from 'material-ui/lib/text-field';

const AddressField = ({addressField}) => ( <TextField
  type="text"
  placeholder={fieldName(addressField.name)}
  {...addressField} />
);

const AddressProperties = ({address}) => {
  return (
    <div>
      { Object.keys(address).map(field => <AddressField addressField={address[field]} key={field} />) }
    </div>
  );
};

class Address extends Component {

  render() {
    const { address } = this.props;
    return (
      <div>
        <AddressProperties address={address} />
      </div>
    );
  }

}

export default Address;
