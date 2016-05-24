import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class ItemPropertyField extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  getID() {
    return this.props.id;
  }

  handleChange(field, value) {
    let id = this.getID();
    this.props.onChange(value, field, id);
  }

  render() {
    const { id, header, value, suggestions, type } = this.props;

    return (
      <AutoComplete
        { ...{autoComplete: 'off'} }
        multiLine={true}
        fullWidth={true}
        id={id + " " + header}
        onUpdateInput={(value) => this.handleChange(header, value)}
        searchText={value}
        type={type}
        dataSource={suggestions}
        filter={AutoComplete.noFilter}
        style={styles.cropFlex}
      />
    );
  }
}

ItemPropertyField = Radium(ItemPropertyField);
export default ItemPropertyField;
