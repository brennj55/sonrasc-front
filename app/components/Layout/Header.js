import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import Colors from 'material-ui/lib/styles/colors';
import Avatar from 'material-ui/lib/avatar';
import '../../styles/main.css';

const userData = (isAuthenticated, name, src) => {
  if (isAuthenticated) return (
    <div className="textboxFlex">
      <span className="headerText">{ name }</span>
      <Avatar src={src} />
    </div>
  );
}

const Header = ({ isAuthenticated, name, src }) => (
  <AppBar
    title="Sonrasc"
    style={{background: Colors.deepPurple600, position: 'fixed'}}
    iconElementRight={userData(isAuthenticated, name, src)}
  />
);

export default Header;
