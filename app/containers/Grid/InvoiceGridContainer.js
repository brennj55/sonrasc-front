import InvoiceGrid from '../../components/Grid/InvoiceGrid';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tilesData: state.InvoiceGrid.invoices.data,
    fetching: state.InvoiceGrid.invoices.fetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.invoiceGrid.getInvoicesForGrid())
  };
};

const InvoiceGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceGrid);

export default InvoiceGridContainer;
