import React, { Component, PropTypes } from 'react';
import AutoComplete from 'material-ui/lib/auto-complete';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class BusinessSelection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const { businesses, onUpdate } = this.props;

    return (
      <div style={[styles.innerFlex, styles.space]}>
        <label style={[styles.flex1, styles.label]}>Invoice sent from</label>
        <AutoComplete
          dataSource={businesses}
          filter={AutoComplete.fuzzyFilter}
          onUpdateInput={onUpdate}
          style={styles.flex1}
        />
      </div>
    );
  }
}

BusinessSelection = Radium(BusinessSelection);
export default BusinessSelection;
