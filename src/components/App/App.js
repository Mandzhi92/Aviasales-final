import React from 'react';

import 'antd/dist/antd.min.css';
import Tabs from '../Tabs';
import CardList from '../CardList';
import Filter from '../Filter';
import logo from '../../assets/logos/Logo.svg';

import classes from './App.module.scss';

const App = () => (
  <div className={classes.app}>
    <div className={classes.app_image}>
      <img src={logo} alt="logo" className={classes.logo} />
    </div>
    <div className={classes.wrapper}>
      <Filter />
      <div className={classes.container}>
        <Tabs />
        <CardList />
      </div>
    </div>
  </div>
);

export default App;
