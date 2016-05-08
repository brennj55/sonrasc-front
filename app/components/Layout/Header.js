import React from 'react';
import AppBar from 'material-ui/AppBar';
import {deepPurple600} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import '../../styles/main.css';

const userData = (isAuthenticated, name, src) => {
  if (isAuthenticated) return (
    <div className="textboxFlex">
      <span className="headerText">{ name }</span>
      <Avatar src={src} />
    </div>
  );
}

const Header = ({ isAuthenticated, name, src, onMenuTouch }) => (
  <AppBar
    title="Sonrasc"
    style={{background: deepPurple600, position: 'fixed'}}
    onLeftIconButtonTouchTap={isAuthenticated? onMenuTouch : null}
    iconElementRight={userData(isAuthenticated, name, src)}
  />
);

export default Header;
