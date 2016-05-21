import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

let mapItems = (items) => items.map((item, arrNum) => (
  <TableRow key={arrNum}>
    <TableRowColumn>{item.Name.value}</TableRowColumn>
    <TableRowColumn>{item.Price.value}</TableRowColumn>
    <TableRowColumn>{item.Quantity.value}</TableRowColumn>
    <TableRowColumn>{item.Total.value}</TableRowColumn>
  </TableRow>
));

let ItemsTable = ({ items }) => (
  <Table>
    <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}
      style={{borderBottom: 'none'}}
    >
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody displayRowCheckbox={false}>
      { mapItems(items) }
    </TableBody>
  </Table>
);

ItemsTable = Radium(ItemsTable);
export default ItemsTable;
