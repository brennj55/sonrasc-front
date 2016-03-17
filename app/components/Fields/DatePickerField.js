import React, { Component, PropTypes } from 'react';
import CropImage from '../../containers/Buttons/CropImage';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

export const formatDate = (date) => {
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
};

const DatePickerField = ({ date, onChange }) => (
  <div>
    <label>Date of Invoice</label>
    <DatePicker
      hintText={"Date"}
      autoOk={true}
      formatDate={formatDate}
      value={date}
      onChange={onChange}
    />
    <CropImage cropType="date" />
  </div>
);

export default DatePickerField;
