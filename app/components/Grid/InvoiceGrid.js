import React, { Component, PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import { printDate } from '../../utils/date';
import NoDataError from '../Errors/NoDataError';

const tiles = (tilesData, onClick) => tilesData.map(tile => (
  <GridTile
    key={tile._id}
    onClick={() => onClick(tile._id)}
    style={styles.pointer}
    title={tile.business.value}
    subtitle={printDate(new Date(tile.date.value))}
    >
      <img src={tile.image} />
  </GridTile>
  )
);

class InvoiceGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { tilesData, fetching, onClick } = this.props;

    if (!fetching) {
      return (
        <div style={styles.grid.root}>
          <h1 style={styles.header}>Invoices Uploaded</h1>
          { tilesData.length > 0?
          <GridList
            cellHeight={250}
            cols={3}
            style={styles.grid.gridList}
          >
            { tiles(tilesData, onClick) }
          </GridList>
          : <NoDataError />}
        </div>
      );
    }

    else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Invoices Uploaded</h1>
        <Spinner />
      </div>
    );
  }
}

InvoiceGrid = Radium(InvoiceGrid);
export default InvoiceGrid;
