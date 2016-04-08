import DatePickerField from '../../components/Fields/DatePickerField';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (event, date) => {
      dispatch(actions.uploadInvoice.updateUploadForm('date', date.getTime()))
    }
  }
};

const ChooseDate = connect(
  null,
  mapDispatchToProps
)(DatePickerField);

export default ChooseDate;
