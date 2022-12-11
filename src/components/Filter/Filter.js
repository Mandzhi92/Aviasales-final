import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CheckboxItem from '../CheckboxItem';

import classes from './Filter.module.scss';

function Filter({ checked }) {
  const [checkedList, setCheckedList] = useState({ ...checked });

  useEffect(() => {
    setCheckedList(checked);
  }, [checked]);

  const filtersData = {
    all: 'Все',
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  };

  const filterList = Object.entries(filtersData).map((item) => (
    <CheckboxItem value={item[1]} amount={item[0]} checked={checkedList[item[0]]} key={item[0]} />
  ));

  return (
    <aside className={classes['filter-box']}>
      <div className={classes.filter}>
        <h5 className={classes['title-filter']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
        {filterList}
      </div>
    </aside>
  );
}

// Filter.defaultProps = { checked: {} }

// Filter.propTypes = { checked: PropTypes.shape({}) }

function mapStateToProps(store) {
  return { checked: store.filter.checked };
}

export default connect(mapStateToProps)(Filter);
