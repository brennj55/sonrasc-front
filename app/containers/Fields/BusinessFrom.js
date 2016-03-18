import BusinessSelection from '../../components/Fields/BusinessSelection';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (businessName) => dispatch(actions.updateUploadForm('business', businessName))
  }
};

const BusinessFrom = connect(
  null,
  mapDispatchToProps
)(BusinessSelection);

export default BusinessFrom;
