import React, { Component, PropTypes } from 'react';

import BusinessSelection from './Fields/BusinessSelection';
import DatePickerField from './Fields/DatePickerField';
import Address from './Fields/Address';

import UploadImage from '../containers/Buttons/UploadImage';
import CropButton from './Buttons/CropButton';
import Items from './Items';


import TextField from 'material-ui/lib/text-field';

const UploadInvoice = ({ date }) => (
  <form encType="multipart/form-data">
    <h1>Upload Invoice</h1>
    <BusinessSelection />
    <UploadImage image={''} />
    <DatePickerField date={date} />
    <Address />
    <Items items={[]} />
  </form>
);

export default UploadInvoice;
