import React, { Component } from 'react';
import CropImage from '../../containers/Buttons/CropImage';
import RemoveItem from '../../containers/Buttons/RemoveItem';

import ItemProperty from '../../containers/Fields/ItemProperty';


class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, headers } = this.props;

    return (
      <div>
        {headers.map(header =>
          <div key={header}>
            <ItemProperty
              id={id}
              header={header}
            />
            <CropImage cropType={'Item/' + id + '/' + header} />
          </div>
        )}
        <div><RemoveItem id={id} /></div>
      </div>
    );
  }
}

export default Item;
