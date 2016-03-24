import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

const tilesData = [
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img:'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img:'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img:'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Vegetables',
    author: 'jisssllwww111',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Water plant',
    author: 'BkrmadzzzztyaKarki',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
    title: 'Vegetables',
    author: 'ssss',
  },
  {
    img: 'http://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/547d264ce4b07da997f79d14/1417487950751/Katya_2014_SMJ_08.jpg',
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
