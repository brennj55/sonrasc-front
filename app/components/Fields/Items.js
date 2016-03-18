import React from 'react';
import ItemContainer from '../../containers/Fields/ItemContainer';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRow from 'material-ui/lib/table/table-row';
import TableBody from 'material-ui/lib/table/table-body';
import FlatButton from 'material-ui/lib/flat-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let headers = ['Name', 'Price', 'Quantity', 'Total', ''];
let header = ['Name', 'Price', 'Quantity', 'Total'];

const TableHead = () => (
  <TableRow>
    {headers.map(header =>
      <TableHeaderColumn key={header}>
        {header}
      </TableHeaderColumn>
    )}
  </TableRow>
);

let Items = ({ items, onClick }) => (
  <div>
    <h2 style={[styles.subheader]}>Items</h2>

    <FlatButton
      onClick={onClick}
      style={styles.space}
    >Add Item</FlatButton>

    <Table style={{position: 'relative'}}>
      <TableHeader displaySelectAll={false}>
        <TableHead />
      </TableHeader>

      <TableBody>
        {items.toArray().map((item, key) =>
          <ItemContainer
              headers={header}
              key={key}
              id={key}
            />
        )}
        {items.toArray().map((item, key) => console.log(item, key))}
      </TableBody>

    </Table>
  </div>
);

Items = Radium(Items);
export default Items;
