import Businesses from '../../components/Businesses/Businesses';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => console.log("SAY WHAT YOU WANT SAVE YOUR SOUL")
    //dispatch(actions.invoiceGrid.getInvoicesForGrid())
  };
};

const BusinessesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);

export default BusinessesContainer;
