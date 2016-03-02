import React from 'react';
import CropButton from './Buttons/CropButton';

const RemoveItemButton = () => (
  <button>Remove</button>
);

const Item = ({name, price, quantity, VAT}) => (
  <li>
    <input text="name" />
    <input text="name" />
    <input text="name" />
    <input text="name" />
    <CropButton type="item" />
    <RemoveItemButton />
  </li>
);

export default Item;
