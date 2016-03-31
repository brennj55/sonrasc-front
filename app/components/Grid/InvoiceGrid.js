import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

const tilesData = [
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img:'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img:'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img:'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Vegetables',
    author: 'jisssllwww111',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Water plant',
    author: 'BkrmadzzzztyaKarki',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Vegetables',
    author: 'ssss',
  },
  {
    img: 'http://paperproinc.com/wp-content/uploads/2012/06/Paper-Pro-Invoice.png',
    title: 'Water plant',
    author: 'xxx',
  }
];

const InvoiceGrid = () => (
  <div style={styles.grid.root}>
    <h1 style={styles.header}>Invoices Uploaded</h1>
    <GridList
      cellHeight={250}
      cols={3}
      style={styles.grid.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.author}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default InvoiceGrid;
