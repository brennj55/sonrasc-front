import Invoice from '../../components/Invoice/Invoice';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isUndefined } from 'lodash';
import { goBack } from 'react-router-redux';
import moment from 'moment';

const getKey = (key) => {
  let location = key.split('/');
  return location[location.length - 1];
}

const mapStateToProps = (state, ownProps) => {
  let invoice = state.Invoice.invoice.data;

  console.log(invoice);
  return {
    uploadedBy: state.Invoice.name.user,
    date: moment(invoice.date.value).locale('en-gb').format('L'),
    fetching: invoice.fetching,
    totalCost: 0.00 || 0.00
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
