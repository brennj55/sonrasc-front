import React, { Component } from 'react';
import Radium from 'radium';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import Divider from 'material-ui/lib/divider';
import { Router, Route, Link } from 'react-router';

import ActionHome from 'material-ui/lib/svg-icons/action/home';
import ActionDashboard from 'material-ui/lib/svg-icons/action/dashboard';
import PlacesBusinessCenter from 'material-ui/lib/svg-icons/places/business-center';
import ContentContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import FileFileUpload from 'material-ui/lib/svg-icons/file/file-upload';
import ActionSettings from 'material-ui/lib/svg-icons/action/settings';

let styles = { base: {marginTop:'64px', textDecoration:'none'}};

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open } = this.props;

    return (
      <LeftNav
        open={open}
        style={styles.base}
        className={"navigation"}
      >
        <Link to="/"><MenuItem leftIcon={<ActionHome />}>Home</MenuItem></Link>
        <MenuItem leftIcon={<ActionDashboard />}>Dashboards</MenuItem>
        <MenuItem leftIcon={<PlacesBusinessCenter />}>Businesses</MenuItem>
        <Link to="/invoices"><MenuItem leftIcon={<ContentContentCopy />}>Invoices</MenuItem></Link>
        <Link to="/invoices/upload"><MenuItem leftIcon={<FileFileUpload />}>Upload Invoice</MenuItem></Link>
        <Divider />
        <MenuItem leftIcon={<ActionSettings />}>Settings</MenuItem>
      </LeftNav>
    );
  }
}

Nav = Radium(Nav);
export default Nav;
