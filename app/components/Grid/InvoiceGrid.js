import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import { printDate } from '../../utils/date';

const tiles = (tilesData) => tilesData.map(tile => (
    <Link to={"/invoices/" + tile._id} key={tile._id}>
      <GridTile
        title={tile.business.value}
        subtitle={printDate(new Date(tile.date.value))}
      >
        <img src={tile.image} />
      </GridTile>
    </Link>
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
    const { tilesData, fetching } = this.props;

    if (!fetching) {
      return (
        <div style={styles.grid.root}>
          <h1 style={styles.header}>Invoices Uploaded</h1>
          <GridList
            cellHeight={250}
            cols={3}
            style={styles.grid.gridList}
          >
            { tiles(tilesData) }
          </GridList>
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
