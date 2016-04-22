import Invoice from '../../components/Invoice/Invoice';
import React from 'react';
import Radium from 'radium';
import styles from '../../styles/flex.js';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isUndefined } from 'lodash';
import { goBack } from 'react-router-redux';
import { sumBy } from 'lodash';
import moment from 'moment';
import { getKey } from '../../utils/url';

let Address = ({ key, field }) => (
  <div key={key} style={[styles.innerFlex]}>
    <span style={styles.flex1}>{field}</span>
  </div>
);

Address = Radium(Address);

const mapStateToProps = (state, ownProps) => {
  let invoice = state.Invoice.invoice.data;

  console.log(invoice);
  return {
    uploadedBy: state.Invoice.name.user,
    business: invoice.business.value,
    items: invoice.items,
    address: invoice.address.value.split(',').map((field, key) => <Address key={key} field={field} />),
    date: moment(invoice.date.value).locale('en-gb').format('L'),
    fetching: invoice.fetching,
    totalCost: sumBy(invoice.items, item => item.Total.value) || 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.invoiceActions.getInvoice(getKey(ownProps.location.pathname))),
    onClickBackButton: () => dispatch(goBack())
  };
};

const InvoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Invoice);

export default InvoiceContainer;
