import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import { printDate } from '../../utils/date';

class Businesses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { fetching } = this.props;

    if (!fetching) {
      return (
        <div style={styles.grid.root}>
          <h1 style={styles.header}>Businesses</h1>
          <GridList
            cellHeight={250}
            cols={3}
            style={styles.grid.gridList}
          >
          </GridList>
        </div>
      );
    }

    else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Businesses</h1>
        <Spinner />
      </div>
    );
  }
}

Businesses = Radium(Businesses);
export default Businesses;
