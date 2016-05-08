import React, { Component, PropTypes } from 'react';
import CropImage from '../../containers/Buttons/CropImage';
import DatePicker from 'material-ui/DatePicker';
import Radium from 'radium';
import styles from '../../styles/flex.js';

export const formatDate = (date) => {
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

let DatePickerField = ({ date, onChange }) => (
  <div style={[styles.innerFlex, styles.space]}>
    <label style={[styles.flex1, styles.label]}>Date of Invoice</label>
    <DatePicker
      hintText={"DD/MM/YYYY"}
      autoOk={true}
      formatDate={formatDate}
      value={date}
      fullWidth={true}
      onChange={onChange}
      style={styles.cropFlex}
    />
    <CropImage cropType="date" />
  </div>
);

DatePickerField = Radium(DatePickerField);
export default DatePickerField;
