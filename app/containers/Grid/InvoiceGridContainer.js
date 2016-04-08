import InvoiceGrid from '../../components/Grid/InvoiceGrid';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    tilesData: []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.invoiceGrid.getInvoices())
  };
};

const InvoiceGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceGrid);

export default InvoiceGridContainer;
