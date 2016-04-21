import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import { printDate } from '../../utils/date';
import Business from 'material-ui/lib/svg-icons/communication/business';
import IconButton from 'material-ui/lib/icon-button';
import NoDataError from '../Errors/NoDataError';

let tiles = (businesses, styleFunc, onClick) => businesses.map(business =>
  <GridTile
    key={business._id}
    title={business.business}
    actionIcon={<IconButton><Business color="white"/></IconButton>}
    actionPosition="left"
    onClick={() => onClick(business._id)}
    style={styleFunc(business._id)}
  />
);

class Businesses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { fetching, businesses, styleFunc, onBusinessClick } = this.props;

    if (!fetching) {
      return (
        <div style={styles.grid.root}>
          <h1 style={styles.header}>Businesses</h1>
          { businesses.length > 0?
            <GridList
              cellHeight={250}
              cols={3}
              style={styles.grid.gridList}
            >
              { tiles(businesses, styleFunc, onBusinessClick) }
            </GridList>
          : <NoDataError />}
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
