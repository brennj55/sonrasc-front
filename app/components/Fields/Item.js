import React from 'react';
import CropButton from '../Buttons/CropButton';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

import ActionDelete from 'material-ui/lib/svg-icons/action/delete';

const RemoveItemButton = () => (
  <FlatButton
    label="Remove"
    secondary={true}
    icon={<ActionDelete />}
  />
);

const Item = ({ headers }) => (
  <TableRow>
    {headers.map(header =>
      <TableRowColumn>
        <TextField />
      </TableRowColumn>
    )}
    <TableRowColumn><CropButton cropType="item" /></TableRowColumn>
    <TableRowColumn><RemoveItemButton /></TableRowColumn>
  </TableRow>
);

export default Item;
