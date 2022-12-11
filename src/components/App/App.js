import CardsList from '../CardsList';
import Filter from '../Filter';
import Logo from '../../logo/Logo.svg';

import classes from './App.module.scss';

function App() {
  const arr = [
    {
      price: 61680,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-06-21T21:43:29.451Z',
          duration: 633,
          stops: [],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-09-25T18:53:36.079Z',
          duration: 634,
          stops: [],
        },
      ],
    },
    {
      price: 107000,
      carrier: 'AK',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-01-07T18:23:54.062Z',
          duration: 1011,
          stops: ['DOH', 'DXB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-01-08T20:33:22.195Z',
          duration: 843,
          stops: ['JNB'],
        },
      ],
    },
    {
      price: 16890,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-02-28T01:34:40.979Z',
          duration: 1198,
          stops: ['JNB', 'DXB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-14T11:52:57.393Z',
          duration: 1026,
          stops: ['DOH'],
        },
      ],
    },
    {
      price: 93270,
      carrier: 'S7',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2022-11-16T04:42:15.329Z',
          duration: 985,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-06-18T13:23:52.652Z',
          duration: 1221,
          stops: ['IST', 'DOH'],
        },
      ],
    },
    {
      price: 69910,
      carrier: 'BT',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '2023-03-31T04:38:44.435Z',
          duration: 1033,
          stops: ['JNB'],
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '2023-05-20T15:27:21.614Z',
          duration: 1426,
          stops: ['IST', 'JNB', 'HKG'],
        },
      ],
    },
  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes['logo-box']}>
        <img src={Logo} alt="logo" className={classes['logo-avia']} />
      </div>
      <div className={classes['app']}>
        <Filter />
        <CardsList arr={arr} />
      </div>
    </div>
  );
}

export default App;
