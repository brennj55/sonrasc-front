import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Graph extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {title, children} = this.props;
    return (
      <div>
        <h2 style={[styles.subheader]}>{title}</h2>
        <div style={styles.svgContainer}>
          <svg version="1.1" height={500} width={500} preserveAspectRatio="xMinYMin meet" style={styles.svgContent}>
            { children }
        	</svg>
        </div>
      </div>
    );
  }
}

Graph = Radium(Graph);
export default Graph;
