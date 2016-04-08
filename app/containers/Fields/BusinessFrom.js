import BusinessSelection from '../../components/Fields/BusinessSelection';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const getNames = (businesses) => businesses.map(name => name.business);

const mapStateToProps = (state) => {
  return {
    businesses: getNames(state.UploadInvoice.businesses.names)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (businessName) => dispatch(actions.uploadInvoice.updateUploadForm('business', businessName)),
    onInit: () => dispatch(actions.uploadInvoice.getBusinessesNames()),
    onBusinessSelect: (business) => {
      dispatch(actions.uploadInvoice.updateUploadForm('business', business)),
      dispatch(actions.uploadInvoice.getInvoiceData(business))
    }
  }
};

const BusinessFrom = connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessSelection);

export default BusinessFrom;
