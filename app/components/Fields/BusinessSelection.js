import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class BusinessSelection extends Component {
  constructor(props) {
    super(props);
    this.handleBusinessSelect = this.handleBusinessSelect.bind(this);
  }

  componentDidMount() {
    this.props.onInit();
  }

  handleBusinessSelect(business) {
    this.props.onBusinessSelect(business);
  }

  render() {
    const { businesses, onUpdate } = this.props;

    return (
      <div style={[styles.innerFlex, styles.space]}>
        <label style={[styles.flex1, styles.label]}>Invoice sent from</label>
        <AutoComplete
          { ...{autoComplete: 'off'} }
          dataSource={businesses}
          fullWidth={true}
          id={"invoiceFrom"}
          filter={AutoComplete.fuzzyFilter}
          onNewRequest={(business) => this.handleBusinessSelect(business)}
          onUpdateInput={onUpdate}
          style={styles.flex1}
        />
      </div>
    );
  }
}

BusinessSelection = Radium(BusinessSelection);
export default BusinessSelection;
