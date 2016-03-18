import React, { Component, PropTypes } from 'react';
import BusinessFrom from '../containers/Fields/BusinessFrom';
import DatePickerField from './Fields/DatePickerField';
import AddressFrom from '../containers/Fields/AddressFrom';
import ItemList from '../containers/Fields/ItemList';
import ChooseDate from '../containers/Fields/ChooseDate';
import UploadImage from '../containers/Buttons/UploadImage';
import CropButton from './Buttons/CropButton';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Radium from 'radium';
import styles from '../styles/flex.js';

let UploadInvoice = ({ date, address, items }) => (
  <div className="container">
    <form encType="multipart/form-data" style={styles.base}>
      <h1 style={styles.header}>Upload Invoice</h1>
      <UploadImage image={''} />
      <BusinessFrom />
      <ChooseDate date={date} />
      <AddressFrom address={address} />
      <ItemList items={items} />

      <div style={styles.space}>
        <RaisedButton
          label="Upload Invoice"
          primary={true}
          style={styles.flex2}
        />
      </div>

    </form>
  </div>
);

UploadInvoice = Radium(UploadInvoice);
export default UploadInvoice;
