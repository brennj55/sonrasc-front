import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import Avatar from 'material-ui/lib/avatar';
import '../../styles/main.css';

const Header = ({ name, src }) => (
  <AppBar
    title="Sonrasc"
    style={{background: Colors.deepPurple600, position: 'fixed'}}
    iconElementRight={<div className="textboxFlex"> <span className="headerText">{ name }</span> <Avatar src={src} /> </div>}
  />
);

export default Header;
