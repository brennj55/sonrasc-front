import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import Avatar from 'material-ui/lib/avatar';

// TODO: replace avatar with server pic.

const Header = () => (
  <AppBar
    title="Sonrasc"
    onLeftIconButtonTouchTap
    style={{background: Colors.deepPurple600}}
    iconElementRight={<Avatar src="/static/images/Profiler.jpg" />}
  />
);

export default Header;
