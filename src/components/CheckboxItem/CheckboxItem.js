import React from 'react';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';

import filterChange from '../actions/filterChange';

import classes from './CheckboxItem.module.css';

const CheckboxItem = ({ value, amount, checked, updateFilter }) => (
  <div className={classes['input-box']}>
    <Checkbox
      id={amount}
      type="checkbox"
      className={classes.checkbox}
      checked={checked}
      onChange={() => updateFilter(amount)}
    >
      <label>{value}</label>
    </Checkbox>
  </div>
);

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilter: (filter) => {
      dispatch(filterChange(filter));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxItem);
