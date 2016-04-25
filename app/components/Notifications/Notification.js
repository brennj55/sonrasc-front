import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';

const Notification = ({ open, message, requestClose }) => (
  <Snackbar
    open={open}
    message={message}
    onRequestClose={requestClose}
  />
);

export default Notification;
