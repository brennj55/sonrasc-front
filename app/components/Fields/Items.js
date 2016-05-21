import React from 'react';
import ItemContainer from '../../containers/Fields/ItemContainer';


import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let headers = ['Name', 'Price', 'Quantity', 'VAT', 'Total', ''];
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

    <div style={{position: 'relative', padding: '1em 0'}}>

      <div>
        {items.toArray().map((item, key) =>
          <ItemContainer
              headers={header}
              key={key}
              id={key}
            />
        )}
      </div>
    </div>

    <h3 style={[styles.subheader, styles.marginSpace, styles.spaceBetween]}>
      Total Cost
      <span>€{totalCost}</span>
    </h3>
  </div>
);

Items = Radium(Items);
export default Items;
