import React, { Component, PropTypes } from 'react';

import BusinessSelection from './BusinessSelection';
import CropImage from '../../containers/Buttons/CropImage';

import TextField from 'material-ui/lib/text-field';

const Address = ({ address, onUpdate }) => (
  <div>
    <label>Business From Address</label>
    <div>
      <TextField
        hintText="Hint Text"
        multiLine={true}
        value={address}
        onChange={onUpdate}
      />
    </div>
    <CropImage cropType="address" />
  </div>
);

export default Address;
