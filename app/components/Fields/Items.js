import React from 'react';
import Item from './Item';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRow from 'material-ui/lib/table/table-row';
import TableBody from 'material-ui/lib/table/table-body';

import FlatButton from 'material-ui/lib/flat-button';

let headers = ['Name', 'Price', 'Quantity', 'VAT', 'Total', '', ''];
let header = ['Name', 'Price', 'Quantity', 'VAT', 'Total'];

const TableHead = () => (
  <TableRow>
    {headers.map(header =>
      <TableHeaderColumn key={header}>
        {header}
      </TableHeaderColumn>
    )}
  </TableRow>
);

const Items = ({ items, onClick }) => (
  <div>
    <h2>Items</h2>
    <FlatButton onClick={onClick}>Add Item</FlatButton>
    <Table style={{position: 'relative'}}>
      <TableHeader displaySelectAll={false}>
        <TableHead />
      </TableHeader>

      <TableBody>
        {items.map(item =>
          <Item
              headers={header}
              key={item.id}
            />
        )}
      </TableBody>

    </Table>
  </div>
);

export default Items;
