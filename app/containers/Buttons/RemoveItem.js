import { connect } from 'react-redux';
import RemoveItemButton from '../../components/Buttons/RemoveItemButton';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => dispatch(actions.uploadInvoice.removeItemByID(id))
  }
};

const RemoveItem = connect(
  null,
  mapDispatchToProps
)(RemoveItemButton);

export default RemoveItem;
