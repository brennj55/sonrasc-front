import React, { Component, PropTypes } from 'react';
import { StyleRoot } from 'radium';
import Header from './Layout/Header';
import NavContainer from '../containers/Layout/NavContainer';
import '../styles/main.css';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <StyleRoot>
        <Header />
        <div id="appContainer">
          <NavContainer />
          {children}
        </div>
      </StyleRoot>
    );
  }
}

export default App;
