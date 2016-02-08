import React, { PropTypes } from 'react';
import Radium from 'radium';

import styles from './styles.js';
import { fieldName } from '../../utils/string.js';

import RasiedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const Button = (props) => {
  return (<RasiedButton
    onClick={ event => {
    event.preventDefault();
    props.func();
    }}
    secondary={true}
    className={"RemoveItemButton"}
    style={props.style}
    label={props.text}
  />);
};

const ItemProperty = (props) => (
  <TextField
    type="text"
    placeholder={fieldName(props.item.name)}
    {...props.item}
    style={props.style}
  />
);

class Items extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div style={styles.innerFlex}>
        { items.map((item, index) =>
        <Card
          key={index}
          style={{flex: '1 1 50%', margin: '10px', padding: '10px'}}
          className={"ItemCard"}
        >
          <div style={[styles.innerFlex, styles.space]}>
            <div style={styles.flex1}>
              <CardHeader title={"Item " + (index + 1)} subtitle="Calculated content here." />
            </div>
            <div style={styles.columnContainer}>
              { Object.keys(item).map(field => <ItemProperty style={styles.flex1} item={item[field]} key={field} />) }
              <div style={styles.space}>
                <Button style={styles.flex1} text="Remove" func={() => items.removeField(index) } />
              </div>
            </div>
          </div>
        </Card>
        )}
      </div>
     );
  }
}

Items = Radium(Items);
export default Items;
