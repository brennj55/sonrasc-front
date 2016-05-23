import React, { Component } from 'react';
import CropImage from '../../containers/Buttons/CropImage';
import RemoveItem from '../../containers/Buttons/RemoveItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ItemProperty from '../../containers/Fields/ItemProperty';
import Radium from 'radium';
import styles from '../../styles/flex.js';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, headers, types } = this.props;

    return (
      <Card style={styles.boxForm}>
        {headers.map((header, key)=>
          <div style={[styles.innerFlex]} key={header}>
            <label style={[styles.flex1, styles.label]}>{header}</label>
            <ItemProperty
              id={id}
              header={header}
              type={types[key]}
            />
            <CropImage cropType={'Item/' + id + '/' + header} />
          </div>
        )}
        <div><RemoveItem id={id} /></div>
      </Card>
    );
  }
}

Item = Radium(Item);
export default Item;
