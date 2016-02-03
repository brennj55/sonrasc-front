import React, { Component, PropTypes } from 'react';
import '../../styles/main.css';
import { StyleRoot } from 'radium';

import Header from '../../components/Header.js';
import { Nav } from '../../containers';

export default class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Header />
        <Nav />
        <div id="appContainer">
          {this.props.children}
        </div>
      </StyleRoot>
    );
  }
}
