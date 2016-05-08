import React, { Component, PropTypes } from 'react';
import BusinessSelection from './BusinessSelection';
import CropImage from '../../containers/Buttons/CropImage';
import TextField from 'material-ui/TextField';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let Address = ({ address, onUpdate }) => (
  <div style={[styles.innerFlex, styles.space]}>
    <label style={[styles.flex1, styles.label]}>Address of Business</label>
      <TextField
        hintText=""
        multiLine={true}
        value={address}
        fullWidth={true}
        onChange={onUpdate}
        style={styles.cropFlex}
      />
    <CropImage cropType="address" />
  </div>
);

Address = Radium(Address);
export default Address;
