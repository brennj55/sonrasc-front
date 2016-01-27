import React, {Component, PropTypes } from 'react';
import { fieldName } from '../utils/string.js';

const AddressField = ({addressField}) => ( <input
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
    return (
      <div>
        <AddressProperties address={this.props.address} />
      </div>
    );
  }
}

// Address.PropTypes = {
//   name:
//   street: PropTypes.object.isRequired,
//   town:
// };

export default Address;
