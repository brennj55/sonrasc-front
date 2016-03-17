import Item from '../../components/Fields/Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const ItemContainer = connect(
  null,
  mapDispatchToProps
)(Item);

export default ItemContainer;
