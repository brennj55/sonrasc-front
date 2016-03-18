import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

const BusinessSelection = ({ businesses, onUpdate }) => (
  <div>
    <label>Invoice sent from</label>
    <AutoComplete
      dataSource={["hi, helldo"]}
      onUpdateInput={onUpdate}
    />
  </div>
);

export default BusinessSelection;
