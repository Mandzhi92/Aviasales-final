import React from 'react';
import { Checkbox } from 'antd';
import classes from './Filter.module.scss';




export default function Filter(){

    return(
      <aside className={classes['filter-box']}>
        <div className={classes.filter}>
          <h5 className={classes['title-filter']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <div className={classes['input-box']}>
            <Checkbox className={classes.checkbox}>Все</Checkbox>
            <Checkbox className={classes.checkbox}>Без пересадок</Checkbox>
            <Checkbox className={classes.checkbox}>1 пересадка</Checkbox>
            <Checkbox className={classes.checkbox}>2 пересадки</Checkbox>
            <Checkbox className={classes.checkbox}>3 пересадки</Checkbox>
          </div>
           
        </div>
           
      </aside>
    )
}