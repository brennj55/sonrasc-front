import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import BusinessFrom from '../../containers/Fields/BusinessFrom';
import DatePickerField from '../Fields/DatePickerField';
import AddressFrom from '../../containers/Fields/AddressFrom';
import ItemList from '../../containers/Fields/ItemList';
import ChooseDate from '../../containers/Fields/ChooseDate';
import UploadImage from '../../containers/Buttons/UploadImage';
import CropButton from '../Buttons/CropButton';
import TextField from 'material-ui/lib/text-field';
import SubmitInvoice from '../../containers/Buttons/SubmitInvoice';
import Snackbar from 'material-ui/lib/snackbar';
import Radium from 'radium';
import styles from '../../styles/flex.js';

import InvoiceSuggestionNotificationContainer from '../../containers/Notifications/InvoiceSuggestionNotificationContainer'

let UploadInvoice = ({ date, address, items, uploading }) => {
  if (!uploading) {
    return (
      <form encType="multipart/form-data" style={styles.base}>
        <h1 style={styles.header}>Upload Invoice</h1>
        <UploadImage image={''} />
        <BusinessFrom />
        <ChooseDate date={date} />
        <AddressFrom address={address} />
        <ItemList items={items} />
        <SubmitInvoice />
        <InvoiceSuggestionNotificationContainer />
      </form>
    );
  }
  else return (
    <Spinner />
  );
}

UploadInvoice = Radium(UploadInvoice);
export default UploadInvoice;
