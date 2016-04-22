import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class SubmitInvoiceButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, disabled } = this.props;

    return (
      <div style={styles.space}>
        <RaisedButton
          label="Upload Invoice"
          primary={true}
          style={styles.flex2}
          onClick={onClick}
          disabled={disabled}
        />
      </div>
    );
  }
}

SubmitInvoiceButton = Radium(SubmitInvoiceButton);
export default SubmitInvoiceButton;
