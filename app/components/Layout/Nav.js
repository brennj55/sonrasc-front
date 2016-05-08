import React, { Component } from 'react';
import Radium from 'radium';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';
import { Router, Route, Link } from 'react-router';

import ActionHome from 'material-ui/svg-icons/action/home';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';
import ContentContentCopy from 'material-ui/svg-icons/content/content-copy';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';

let styles = { base: {marginTop:'64px' } };

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open, onLogoutClick } = this.props;
    return (
      <Drawer
        open={open}
        containerStyle={styles.base}
        className={"navigation"}
      >
        {/*<Link to="/build/"><MenuItem leftIcon={<ActionHome />}>Home</MenuItem></Link>*/}
        <Link to="/dashboards"><MenuItem leftIcon={<ActionDashboard />}>Dashboards</MenuItem></Link>
        <Link to="/businesses"><MenuItem leftIcon={<PlacesBusinessCenter />}>Businesses</MenuItem></Link>
        <Link to="/invoices"><MenuItem leftIcon={<ContentContentCopy />}>Invoices</MenuItem></Link>
        <Link to="/invoices/upload"><MenuItem leftIcon={<FileFileUpload />}>Upload Invoice</MenuItem></Link>
        <Divider />
        {/*<MenuItem leftIcon={<ActionSettings />}>Settings</MenuItem>*/}
        <MenuItem
          leftIcon={<ExitToApp />}
          onTouchTap={onLogoutClick}
          >Logout</MenuItem>
      </Drawer>
    );
  }
}

Nav = Radium(Nav);
export default Nav;
