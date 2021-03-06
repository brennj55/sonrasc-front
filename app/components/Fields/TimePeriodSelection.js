import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Radium from 'radium';
import styles from '../../styles/flex.js';

let TimePeriodSelection = () => (
  <div style={[{ marginTop: '2em' }, styles.flexRow]}>
    <RadioButtonGroup name="shipSpeed" defaultSelected="year" style={styles.flexRow}>
      <RadioButton
        value="day"
        label="Day"
        style={{flex: '1 1 25%', display: 'flex'}}
      />
      <RadioButton
        value="month"
        label="Month"
        style={{flex: '1 1 25%', display: 'flex'}}
      />
      <RadioButton
        value="year"
        label="Year"
        style={{flex: '1 1 25%', display: 'flex'}}
      />
    </RadioButtonGroup>
  </div>
);

TimePeriodSelection = Radium(TimePeriodSelection);
export default TimePeriodSelection;
