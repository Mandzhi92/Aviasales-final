import React from 'react';
import { format, addMinutes } from 'date-fns';
import PropTypes from 'prop-types';

import classes from './AviaInfo.module.scss';

const AviaInfo = ({ info }) => {
  const { origin, destination, date, duration, stops } = info;
  const transfer = (data) => {
    if (data.length === 1) {
      return '1 ПЕРEСАДКА';
    }
    if (data.length > 1) {
      return `${data.length} ПЕРЕСАДКИ`;
    }
    return 'БЕЗ ПЕРЕСАДОК';
  };
  const travelDur = `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  const formDate = `${format(new Date(date), 'hh:mm')} - ${format(addMinutes(new Date(date), duration), 'hh:mm')}`;
  return (
    <div className={classes.container}>
      <div className={classes.direction}>
        <div className={classes.psEl}>{`${origin} - ${destination}`}</div>
        {formDate}
      </div>
      <div className={classes.duration}>
        <div className={classes.psEl}>В ПУТИ</div>
        {travelDur}
      </div>
      <div className={classes.transfers}>
        {' '}
        <div className={classes.psEl}>{transfer(stops)}</div>
        {stops.join(',')}
      </div>
    </div>
  );
};

AviaInfo.defaultProps = { info: {} };

AviaInfo.propTypes = { info: PropTypes.shape() };

export default AviaInfo;
