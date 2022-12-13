import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import asyncReducer from './asyncReducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    data: asyncReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
