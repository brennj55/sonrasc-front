import React, { Component } from 'react';
import CropImage from '../../containers/Buttons/CropImage';
import RemoveItem from '../../containers/Buttons/RemoveItem';

import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import ItemProperty from '../../containers/Fields/ItemProperty';


class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, headers } = this.props;

    return (
      <TableRow>
        {headers.map(header =>
          <TableRowColumn key={header}>
            <ItemProperty
              id={id}
              header={header}
            />
            <CropImage cropType={'Item/' + id + '/' + header} />
          </TableRowColumn>
        )}
        <TableRowColumn><RemoveItem id={id} /></TableRowColumn>
      </TableRow>
    );
  }
}

export default Item;
