import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Dashboards extends Component {

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
        <div style={styles.base}>
          <h1 style={[styles.header, styles.spaceBetween]}>
            Dashboards
          </h1>

        </div>
      );
    }

    else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Dashboards</h1>
        <Spinner />
      </div>
    );
  }
}

Dashboards = Radium(Dashboards);
export default Dashboards;
