import Item from '../../components/Fields/Item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);

export default ItemContainer;
