import React, { Component, PropTypes } from 'react';
import { StyleRoot } from 'radium';
import HeaderContainer from '../containers/Layout/HeaderContainer';
import NavContainer from '../containers/Layout/NavContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/main.css';

const AppContents = ({children, navOpen}) => (
<div>
  <HeaderContainer />
  <div id="appContainer">
    <NavContainer />
      {
        navOpen ?
        <div className="container"
          style={{marginLeft: '256px'}}>
          {children}
        </div>
        :
        <div className="container">
          {children}
        </div>
      }
  </div>
</div>
);

class App extends Component {

  render() {
    const { children, navOpen } = this.props;

    return (
      <StyleRoot>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <AppContents children={children} navOpen={navOpen} />
        </MuiThemeProvider>
      </StyleRoot>
    );
  }
}

export default App;
