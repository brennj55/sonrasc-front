import React, { Component, PropTypes } from 'react';
import { StyleRoot } from 'radium';
import HeaderContainer from '../containers/Layout/HeaderContainer';
import NavContainer from '../containers/Layout/NavContainer';
import '../styles/main.css';

class App extends Component {

  render() {
    const { children } = this.props;

    return (
      <StyleRoot>
        <HeaderContainer />
        <div id="appContainer">
          <NavContainer />
          <div className="container">
            {children}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default App;
