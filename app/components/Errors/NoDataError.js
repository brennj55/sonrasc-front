import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let NoDataError = () => (
  <h2 style={[{
    color: '#B9B9B9',
    textAlign: 'center',
    padding: '4em 0'
  }]}>No data found, try <Link to="/invoices/upload">uploading data</Link>.</h2>
);

NoDataError = Radium(NoDataError);
export default NoDataError;
