import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../../../styles/flex.js';

let GraphError = () => (
  <h1 style={[{
    color: '#B9B9B9',
    textAlign: 'center',
    padding: '4em 0'
  }]}>Please <Link to="/invoices/upload">upload data</Link> to populate this graph</h1>
);

GraphError = Radium(GraphError);
export default GraphError;
