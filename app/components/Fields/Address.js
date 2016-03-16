import React, { Component, PropTypes } from 'react';

import BusinessSelection from './BusinessSelection';
import CropImage from '../../containers/Buttons/CropImage';

import TextField from 'material-ui/lib/text-field';

const Address = () => (
  <div>
    <label>Business From Address</label>
    <TextField hintText="Hint Text" />
    <CropImage cropType="address" />
  </div>
);

export default Address;
