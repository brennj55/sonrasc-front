import Business from '../../components/Businesses/Business';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { push } from 'react-router-redux';
import { getKey } from '../../utils/url';

const randomColour = () => "#" + ((1<<24)*Math.random()|0).toString(16);

const getColour = () => {
  return {
    background: randomColour(),
    cursor: 'pointer'
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInit: () => dispatch(actions.businessActions.getBusiness(getKey(ownProps.location.pathname))),
  };
};

const BusinessContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Business);

export default BusinessContainer;
