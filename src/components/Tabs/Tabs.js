import React from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import sortChange from '../../actions/sortChange';
import './Tabs.scss';

const Tabs = ({ updateSort }) => {
  const btnList = {
    cheapest: 'САМЫЙ ДЕШЁВЫЙ',
    fastest: 'САМЫЙ БЫСТРЫЙ',
    optimal: 'ОПТИМАЛЬНЫЙ',
  };
  const btns = Object.entries(btnList).map((item) => (
    <Radio.Button value={item[0]} className="btnStyle" onClick={() => updateSort(item[0])} key={item[0]}>
      {item[1]}
    </Radio.Button>
  ));
  return (
    <div className="Tabs">
      <Radio.Group defaultValue="cheapest" buttonStyle="solid" className="groupStyle">
        {btns}
      </Radio.Group>
    </div>
  );
};

Tabs.defaultProps = { updateSort: () => null };

Tabs.propTypes = { updateSort: PropTypes.func };
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    updateSort: (tab) => {
      dispatch(sortChange(tab));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
