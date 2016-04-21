import Invoice from '../../components/Invoice/Invoice';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { isUndefined } from 'lodash';
import { goBack } from 'react-router-redux';


const getKey = (key) => {
  let location = key.split('/');
  return location[location.length - 1];
}

const mapStateToProps = (state, ownProps) => {
  let invoice = state.Invoice.invoice.data || {};
  //let date = invoice.date.value;

  return {
    invoice: state.Invoice.invoice.data,
    fetching: state.Invoice.invoice.fetching
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
