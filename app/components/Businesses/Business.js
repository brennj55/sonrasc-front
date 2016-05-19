import React, { Component, PropTypes } from 'react';
import Spinner from '../Layout/Spinner';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import {GridList, GridTile} from 'material-ui/GridList';
import MoneyOverTimeForBusinessContainer from '../../containers/Businesses/MoneyOverTimeForBusinessContainer';
import { getKey } from '../../utils/url';

let tiles = (invoices, styleFunc, onInvoiceClick) => invoices.map(invoice =>
  <GridTile
    key={invoice._id}
    title={moment(invoice.date.value).locale("en-gb").format("L")}
    style={{background: styleFunc(invoice._id), cursor: 'pointer' }}
    onClick={() => onInvoiceClick(invoice._id)}
  />
);

class Business extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const {
      invoices, styleFunc, onInvoiceClick,
      business, onClickBackButton, address
    } = this.props;

    if (true) {
      return (
        <div style={styles.base}>
          <h1 style={[styles.header, styles.spaceBetween]}>
            {business}
            <FlatButton
              label="Go back"
              secondary={true}
              onClick={onClickBackButton}
            />
          </h1>

          <div style={[styles.innerFlex, styles.space]}>
            <label style={[styles.flex1, styles.label]}>Address</label>
            <span style={styles.flex1}>{address}</span>
          </div>

          <div stlye={styles.space}>
            <h2 style={[styles.subheader, styles.spaceBetween]}>Costs over time</h2>
            <MoneyOverTimeForBusinessContainer id={location.pathname} />
          </div>

          <div style={[styles.space]}>
            <h2 style={[styles.subheader, styles.spaceBetween]}>Invoices</h2>
            <GridList
              cellHeight={70}
              cols={1}
            >
              { tiles(invoices, styleFunc, onInvoiceClick) }
            </GridList>
          </div>
        </div>
      );
     }

     else return (
      <div style={styles.grid.root}>
        <h1 style={styles.header}>Business...</h1>
        <Spinner />
      </div>
    );
  }
}

Business = Radium(Business);
export default Business;
