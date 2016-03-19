import React from 'react';
import ItemContainer from '../../containers/Fields/ItemContainer';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRow from 'material-ui/lib/table/table-row';
import TableBody from 'material-ui/lib/table/table-body';
import FlatButton from 'material-ui/lib/flat-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
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

let Items = ({ items, onClick, totalCost }) => (
  <div style={[styles.space]}>
    <h2 style={[styles.subheader, styles.spaceBetween]}>
      Items
      <FlatButton
        primary={true}
        onClick={onClick}
        icon={<ContentAdd />}
        label="Add Item"
      />
    </h2>

    <Table style={{position: 'relative', padding: '1em 0'}}>
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
      </TableBody>
    </Table>

    <h3 style={[styles.subheader, styles.marginSpace, styles.spaceBetween]}>
      Total Cost
      <span>{totalCost}</span>
    </h3>
  </div>
);

Items = Radium(Items);
export default Items;
