import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let BusinessSelection = ({ businesses, onUpdate }) => (
  <div style={[styles.innerFlex, styles.space]}>
    <label style={[styles.flex1, styles.label]}>Invoice sent from</label>
    <AutoComplete
      dataSource={["hi, helldo"]}
      onUpdateInput={onUpdate}
      style={styles.flex1}
    />
  </div>
);

BusinessSelection = Radium(BusinessSelection);
export default BusinessSelection;
