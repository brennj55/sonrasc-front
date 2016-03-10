import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';

const BusinessSelection = ({ businesses }) => (
  <div>
    <label>Invoice sent from</label>
    <AutoComplete
      dataSource={["hi, helldo"]}
      onUpdateInput={() => console.log("hi")}
    />
  </div>
);

export default BusinessSelection;
