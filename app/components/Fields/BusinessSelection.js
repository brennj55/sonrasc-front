import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

const BusinessSelection = () => (
  <div>
    <label>Invoice sent from</label>
    <AutoComplete
      dataSource={[]}
    />
  </div>

);

export default BusinessSelection;
