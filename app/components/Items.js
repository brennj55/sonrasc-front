import React from 'react';
import Item from './Item';

const Items = ({ items }) => (
  <div>
    <h2>Items</h2>
    <ul>
      {items.map(item =>
        <Item
          key={item.id}
          {...item}
        />
      )}
    </ul>
  </div>
);

export default Items;
