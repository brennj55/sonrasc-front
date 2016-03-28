import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let Spinner = () => (
  <div style={[styles.centerFlex]}>
    <CircularProgress size={2.5} />
  </div>
);

Spinner = Radium(Spinner);
export default Spinner;
