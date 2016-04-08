import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

const tiles = (tilesData) => tilesData.map(tile => (
    <GridTile
      key={tile.author}
      title={tile.title}
      subtitle={<span>by <b>{tile.author}</b></span>}
      actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
    >
      <img src={tile.img} />
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
    const { tilesData, uploading } = this.props;

    if (!uploading) {
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
