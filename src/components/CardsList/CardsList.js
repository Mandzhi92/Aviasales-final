import React from 'react';
import classes from'./CardsList.module.scss';
import Tabs from '../Tabs';





export default function CardsList({arr}){
  const tickets = arr.map(({price, carrier}) => {
    return (
      <div className={classes.card}>

        <div className={classes.price}>
          <p>{`${price} Р`}</p>
          <img className={classes['icon-company']} src={`https://pics.avs.io/99/36/${carrier}.png`} alt='logo'></img>
        </div>

        <div className={classes['avia-info']}>
          <div className={classes.segments1}>
            <div>
              <div className={classes['title-desc']}>MOW-HKT</div>
              <div className={classes['desc-info']}>10:45 - 08:00</div>
            </div>

            <div>
              <div className={classes['title-desc']}>В ПУТИ</div>
              <div className={classes['desc-info']}>21ч 15м</div>
            </div>

            <div>
              <div className={classes['title-desc']}>2 ПЕРЕСАДКИ</div>
              <div className={classes['desc-info']}>HKG, JNB</div>
            </div>

          </div>

          <div className={classes.segments2}>
            <div>
              <div className={classes['title-desc']}>HKT-MOW</div>
              <div className={classes['desc-info']}>11:20 - 00:50</div>
            </div>

            <div>
              <div className={classes['title-desc']}>В ПУТИ</div>
              <div className={classes['desc-info']}>13ч 30м</div>
            </div>

            <div>
              <div className={classes['title-desc']}>1 ПЕРЕСАДКА</div>
              <div className={classes['desc-info']}>HKG</div>
            </div>
          </div>
        </div>
      </div>
    )
  })
    return (
      <div className={classes['avia-cards']}>
        <Tabs/>
        <div className={classes['cards-list']}>
          {tickets}
        </div>
        <button className={classes.show}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</button>
      </div>
    )
  }