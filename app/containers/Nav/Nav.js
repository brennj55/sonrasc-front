import React, { Component } from 'react';
import Radium from 'radium';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionDashboard from 'material-ui/lib/svg-icons/action/dashboard';
import PlacesBusinessCenter from 'material-ui/lib/svg-icons/places/business-center';
import ContentContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import FileFileUpload from 'material-ui/lib/svg-icons/file/file-upload';
let styles = { base: {marginTop:'64px'}};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <LeftNav
        open={this.state.open}
        style={styles.base}
      >
        <MenuItem leftIcon={<ActionHome />}>Home</MenuItem>
        <MenuItem leftIcon={<ActionDashboard />}>Dashboards</MenuItem>
        <MenuItem leftIcon={<PlacesBusinessCenter />}>Businesses</MenuItem>
        <MenuItem leftIcon={<ContentContentCopy />}>Invoices</MenuItem>
        <MenuItem leftIcon={<FileFileUpload />}>Upload Invoice</MenuItem>
      </LeftNav>
    );
  }
}

Nav = Radium(Nav);
export default Nav;
