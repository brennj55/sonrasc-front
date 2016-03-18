import Address from '../../components/Fields/Address';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdate: (event) => dispatch(actions.updateUploadForm('address', event.target.value))
  }
};

const AddressFrom = connect(
  null,
  mapDispatchToProps
)(Address);

export default AddressFrom;
