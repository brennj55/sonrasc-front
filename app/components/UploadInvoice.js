import React, { Component, PropTypes } from 'react';

import BusinessFrom from '../containers/Fields/BusinessFrom';
import DatePickerField from './Fields/DatePickerField';
import AddressFrom from '../containers/Fields/AddressFrom';
import ItemList from '../containers/Fields/ItemList';

import UploadImage from '../containers/Buttons/UploadImage';
import CropButton from './Buttons/CropButton';

import RaisedButton from 'material-ui/lib/raised-button';

import TextField from 'material-ui/lib/text-field';

const UploadInvoice = ({ date, address, items }) => (
  <form encType="multipart/form-data">
    <h1>Upload Invoice</h1>
    <UploadImage image={''} />
    <BusinessFrom />
    <DatePickerField date={date} />
    <AddressFrom address={address} />
    <ItemList items={items} />
    <RaisedButton label="Upload Invoice" primary={true} />
  </form>
);

export default UploadInvoice;
