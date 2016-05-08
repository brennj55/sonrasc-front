import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';


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
    const { id, header, value, suggestions } = this.props;

    return (
      <AutoComplete
        { ...{autoComplete: 'off'} }
        multiLine={true}
        fullWidth={true}
        onUpdateInput={(value) => this.handleChange(header, value)}
        searchText={value}
        dataSource={suggestions}
        filter={AutoComplete.noFilter}
      />
    );
  }
}

export default ItemPropertyField;
