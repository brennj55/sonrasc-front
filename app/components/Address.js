import React, {Component, PropTypes } from 'react';
import { fieldName } from '../utils/string.js';
import TextField from 'material-ui/lib/text-field';
import Radium from 'radium';

const AddressField = ({addressField}) => ( <TextField
  type="text"
  placeholder={fieldName(addressField.name)}
  style={{paddingRight: '20px'}}
  {...addressField} />
);

const AddressProperties = (props) => {
  return (
    <div style={props.style}>
      { Object.keys(props.address).map(field => <AddressField addressField={props.address[field]} key={field} />) }
    </div>
  );
};

class Address extends Component {

  render() {
    const { address, style } = this.props;
    return (
      <AddressProperties address={address} style={style} />
    );
  }
}

Address = Radium(Address);
export default Address;
